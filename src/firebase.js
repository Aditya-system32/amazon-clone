import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1uqJ86izGqihQTknyVfncXePk8tkR1r0",
  authDomain: "clone-dd828.firebaseapp.com",
  projectId: "clone-dd828",
  storageBucket: "clone-dd828.appspot.com",
  messagingSenderId: "533408307866",
  appId: "1:533408307866:web:b8ced314226c592fa0dd23",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
