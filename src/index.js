import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const API_KEY_FIREBASE = process.env.REACT_APP_FIREBASE_API_KEY;
firebase.initializeApp({
    apiKey: `${API_KEY_FIREBASE}`,
    authDomain: "instaphoto-5920c.firebaseapp.com",
    databaseURL: "https://instaphoto-5920c.firebaseio.com",
    projectId: "instaphoto-5920c",
    storageBucket: "",
    messagingSenderId: "360404220671",
    appId: "1:360404220671:web:d87c0e9c05b15d822f2aca",
    measurementId: "G-SLJFG6VJCN",
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
