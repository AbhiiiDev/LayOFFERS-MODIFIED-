import firebase from 'firebase/compat/app';
import'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs0mSmmnG6Mt0m16IDG5ErpqkstAKra-k",
  authDomain: "layoffer-3b8c0.firebaseapp.com",
  projectId: "layoffer-3b8c0",
  storageBucket: "layoffer-3b8c0.appspot.com",
  messagingSenderId: "713600145318",
  appId: "1:713600145318:web:3c522549681ffc59112167"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export{ db , auth };