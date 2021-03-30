import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBOZiKHnNlirCiLrPmX2Zbt25GKIARHhe0",
    authDomain: "react-9a651.firebaseapp.com",
    projectId: "react-9a651",
    storageBucket: "react-9a651.appspot.com",
    messagingSenderId: "301412985384",
    appId: "1:301412985384:web:01e79a417401a8ac96e31d"
  };

//INITIALIZING APP
const firebaseApp = firebase.initializeApp(firebaseConfig); //connects frontend with the backend

//DATABASE
const db = firebaseApp.firestore();

//AUTHORIZATION
const auth = firebase.auth();

//AUTHORIZATION PROVIDER
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};