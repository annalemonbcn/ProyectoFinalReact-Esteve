// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNnhoqhjmihNlN7PL-inwHRTOjeQcHfWg",
  authDomain: "lemoninfilm.firebaseapp.com",
  projectId: "lemoninfilm",
  storageBucket: "lemoninfilm.appspot.com",
  messagingSenderId: "658565921724",
  appId: "1:658565921724:web:9d33368ffdd50e194a09b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Enter de database
export const db = getFirestore(app);