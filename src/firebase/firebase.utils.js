import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCr4UtAIfNc-WBtoXxcuCa9oAqAbx05nwk",
    authDomain: "crwn-db-a6764.firebaseapp.com",
    databaseURL: "https://crwn-db-a6764.firebaseio.com",
    projectId: "crwn-db-a6764",
    storageBucket: "crwn-db-a6764.appspot.com",
    messagingSenderId: "695733806653",
    appId: "1:695733806653:web:27771620325f6177d8ec54",
    measurementId: "G-TCHX99PJD4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;