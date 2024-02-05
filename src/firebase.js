
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDtdGxZ5oy5PpFBc9we3ouF92fuQsKL9Xw",
    authDomain: "slack-clone-48bdd.firebaseapp.com",
    projectId: "slack-clone-48bdd",
    storageBucket: "slack-clone-48bdd.appspot.com",
    messagingSenderId: "932130539980",
    appId: "1:932130539980:web:6669eed7c351628a743569"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db};