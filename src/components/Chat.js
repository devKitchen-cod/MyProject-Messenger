import React, {useContext, useState} from 'react';
import Loader from './Loader';
import { Context } from '../index';

import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import './cont.css'




const Chat = () => {
  const {auth, firestore} = useContext(Context)

  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, loading] = useCollectionData(
      firestore.collection('messages').orderBy('createdAt')
  )


  const sendMessage = async () => {
      firestore.collection('messages').add({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          text: value,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
          
      })
      setValue('')
  }

  if (loading) {
      return <Loader/>
  }

  return (



        <div className='chat'>
            
          <Grid container
                justify='center'
                className='grid_cont'
                style={{height: window.innerHeight - 50}}
                >
              <div className='first_div' style={{width: '60%', height: '60vh', border: '5px solid black', overflowY: 'auto'}}>
                  {messages.map(message =>
                      <div style={{
                          margin: 10,
                          border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                          marginLeft: user.uid === message.uid ? 'auto' : '10px',
                          width: 'fit-content',
                          padding: 5,
                      }}>
        
                          <Grid container >                            
                              <Avatar src={message.photoURL}/>
                              <div className ="d-name">{message.displayName}</div>  
                      
                          </Grid>
                            
                          <div style = {{background: "#00000"}}>{message.text}</div>
                          
                      </div>

                  )}
              </div>

              <Grid
                  container
                  direction={"column"}
                  alignItems={"flex-end"}
                  style={{width: '60%'}}
              >
                  <TextField
                      fullWidth
                      rowsMax={3}
                      variant={"outlined"}
                      label = "Enter message"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                  />
                  <Button onClick={sendMessage} variant={"contained"} color={'primary'} style={{marginTop:"20px"}}>Отправить</Button>
              </Grid>
          </Grid>
      </div>
    // </div>
  );
};

export default Chat;