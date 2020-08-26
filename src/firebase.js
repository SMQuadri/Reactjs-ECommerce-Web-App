import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // Paste your Firebase config snippet here, as guided in the steps in README.md
});

const auth = firebase.auth();

export { auth };
