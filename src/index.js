import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBF1KGyR-N6CEV0R2Odd66dFN5qDIjTm-c",
  authDomain: "massege-app-3437e.firebaseapp.com",
  projectId: "massege-app-3437e",
  storageBucket: "massege-app-3437e.appspot.com",
  messagingSenderId: "308399030503",
  appId: "1:308399030503:web:18b3a8dd9d09efcbe36242",
  measurementId: "G-BX33W4T7FN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <Context.Provider value={{
    firebase, 
    auth,
    firestore
  }}>
      <App />

  </Context.Provider>,
    
  
  document.getElementById('root')
);


