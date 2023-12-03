import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSeWgq70-NerF-Yo09zZUOOBKw0I-pdlg",
  authDomain: "todo-app-cp-2d7d2.firebaseapp.com",
  projectId: "todo-app-cp-2d7d2",
  storageBucket: "todo-app-cp-2d7d2.appspot.com",
  messagingSenderId: "425337745023",
  appId: "1:425337745023:web:54d167584e5791b6b3594a",
  measurementId: "G-NKPNGCFVGE",
});

const db = firebaseApp.firestore();
export default db;
