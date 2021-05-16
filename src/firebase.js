import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCXbQzEqe4UaiX1lLsGo7fwkk5JSeD7pQo",
  authDomain: "fir-39fe7.firebaseapp.com",
  projectId: "fir-39fe7",
  storageBucket: "fir-39fe7.appspot.com",
  messagingSenderId: "976950253498",
  appId: "1:976950253498:web:7cb3e3ecc678fa04936f83",
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
export { db, auth };
