import React from 'react'
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar'
import { AppBar } from '@material-ui/core';
import { Button, Grid } from '@material-ui/core';
import { LOGIN_ROUTE, CONTATCTS_ROUTE } from './utils/consts';
import {  Context } from "..";
import { useContext } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const check = false
  return (
<AppBar position="static" color = {"primary"}>
        <Toolbar variant = {"dense"}>
        
            <Grid container justify={"center"}>
                {user ?
                    <Button onClick = {() => auth.signOut()} variant = {'contained'} color= {'secondary'}>Logout</Button>
                    :
                    <NavLink to = {LOGIN_ROUTE}>
                    <Button variant = {'contained'} color= {'secondary'}>Login</Button>
                    </NavLink>

                    }

            </Grid>
        </Toolbar>    
</AppBar>
  );

};
export default Navbar;

