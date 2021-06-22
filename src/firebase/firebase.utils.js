import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA88EADPXgGC4nv2bNA9Vfetr8fVErlR0c",
    authDomain: "crwn-db-da36f.firebaseapp.com",
    projectId: "crwn-db-da36f",
    storageBucket: "crwn-db-da36f.appspot.com",
    messagingSenderId: "971823164337",
    appId: "1:971823164337:web:6f873a9d69248995f5eb90",
    measurementId: "G-LJ2NFHXSJW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);