// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR8Pm1CwUUGKy7TP1zM3UY_mSIpmwyz68",
  authDomain: "parkeasy-dc4a4.firebaseapp.com",
  projectId: "parkeasy-dc4a4",
  storageBucket: "parkeasy-dc4a4.appspot.com",
  messagingSenderId: "98295467106",
  appId: "1:98295467106:web:56942369f9f96fe513d53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{app, auth};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in');
  } else {
    console.log('User is signed out');
  }
});