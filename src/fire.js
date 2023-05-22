// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCook75CDAZyRRhz8TejBKZ9QJF6lV6QWY",
  authDomain: "teamworkgotravel.firebaseapp.com",
  projectId: "teamworkgotravel",
  storageBucket: "teamworkgotravel.appspot.com",
  messagingSenderId: "840055960392",
  appId: "1:840055960392:web:56936239929cffb4de397d",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
