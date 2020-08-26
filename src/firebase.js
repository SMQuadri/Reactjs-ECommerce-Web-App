import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDV76Redi9y4ojJqsmDTfceLMz7FJWF3a0",
    authDomain: "nike-10001.firebaseapp.com",
    databaseURL: "https://nike-10001.firebaseio.com",
    projectId: "nike-10001",
    storageBucket: "nike-10001.appspot.com",
    messagingSenderId: "322666058500",
    appId: "1:322666058500:web:4de48bf31614a56deab651",
    measurementId: "G-4YWTPD6XRV"
});

const auth = firebase.auth();

export { auth };