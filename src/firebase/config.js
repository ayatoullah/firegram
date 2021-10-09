import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiv4nG9Hhr71PODz_maZ372aCXODtvF7s",
    authDomain: "ninja-firebase-7e23b.firebaseapp.com",
    projectId: "ninja-firebase-7e23b",
    storageBucket: "ninja-firebase-7e23b.appspot.com",
    messagingSenderId: "593900453509",
    appId: "1:593900453509:web:08b282f2ee1234adcf33ec"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export  {projectStorage, projectFireStore, timestamp};