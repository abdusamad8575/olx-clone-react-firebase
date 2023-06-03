import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAScJni1MlAsNro_2GJ9GkSpmi2oRh2w_s",
    authDomain: "olxclone-c631c.firebaseapp.com",
    projectId: "olxclone-c631c",
    storageBucket: "olxclone-c631c.appspot.com",
    messagingSenderId: "929765111657",
    appId: "1:929765111657:web:5e7c3c0a19838a8da32ff8",
    measurementId: "G-7XXYFS4BPR"
  };

  export default firebase.initializeApp(firebaseConfig)