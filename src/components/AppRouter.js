import { string } from "prop-types";
import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router";
import { privetRoutes, publicRoutes } from "./routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from "..";

const AppRouter = () =>{
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    console.log(user)

    return user ? 
      (
        <Switch>
             {privetRoutes.map(({path, Component}) =>
                <Route key={path} key = {path} path={path} component = {Component} exact = {true}/>
                 
                )}
                <Redirect to = {CHAT_ROUTE}/>
                
          </Switch>
      )
      :
      (
        <Switch>
        {publicRoutes.map(({path, Component}) =>
           <Route key={path} key = {path} path={path} component = {Component} exact = {true}/>
            
           )}
           <Redirect to = {LOGIN_ROUTE}/>
           
     </Switch>
      )
};


export default AppRouter