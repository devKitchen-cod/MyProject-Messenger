import React, { useContext } from 'react'
import { Container, Grid, Button, Box } from '@material-ui/core';
import { Contex } from '..';
import firebase from 'firebase';





const Loader = () => {
    return(
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    );
    
}
export default Loader;

