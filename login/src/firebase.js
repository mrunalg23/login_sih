
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCh_rlLVJaNjEdacTvP5GrSlTlK4RElFPA",
    authDomain: "login-40dae.firebaseapp.com",
    projectId: "login-40dae",
    storageBucket: "login-40dae.appspot.com",
    messagingSenderId: "79117683444",
    appId: "1:79117683444:web:d7852d606719b2d511aca1"
  };
  
  // Initialize Firebase
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};