
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyANnJN_2tio3mc2xTkZNOE-VcK8kkNWlWU",

    authDomain: "bolonius.firebaseapp.com",
  
    projectId: "bolonius",
  
    storageBucket: "bolonius.appspot.com",
  
    messagingSenderId: "761141198355",
  
    appId: "1:761141198355:web:ecdab5ed5e9b1b349489e6",
  
    measurementId: "G-EDRH1JEMB5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



//login de google
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'es';
const auth=firebase.auth();


// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();










