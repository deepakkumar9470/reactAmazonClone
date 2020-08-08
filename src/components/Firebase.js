import firebase from "firebase";

const firebaseApp =firebase.initializeApp ( {
    apiKey: "AIzaSyCP956q3dTHmQB6oXqUHX94qfa32nBhltI",
    authDomain: "react-61ebb.firebaseapp.com",
    databaseURL: "https://react-61ebb.firebaseio.com",
    projectId: "react-61ebb",
    storageBucket: "react-61ebb.appspot.com",
    messagingSenderId: "400622550545",
    appId: "1:400622550545:web:fe44d8e11bcefca3093bb0",
    measurementId: "G-T23G8N18YT"
    
});

// const db= firebaseApp.firestore();
const auth=  firebase.auth();

export {auth};