// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB-kEqAGI_A-8Wr2fjNIDxdDIXFmYEt2ug",
  authDomain: "clone-360f6.firebaseapp.com",
  projectId: "clone-360f6",
  storageBucket: "clone-360f6.appspot.com",
  messagingSenderId: "707965641896",
  appId: "1:707965641896:web:f59000310804bfb8c58e9d",
  measurementId: "G-8PMLV6S0BD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
