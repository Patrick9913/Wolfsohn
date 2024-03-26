// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIv5hSNaYki1onv_hp9SH57MoMpWhgmcU",
  authDomain: "wolfsohn-e1e7e.firebaseapp.com",
  projectId: "wolfsohn-e1e7e",
  storageBucket: "wolfsohn-e1e7e.appspot.com",
  messagingSenderId: "176278443623",
  appId: "1:176278443623:web:b46ce1c8d9f3fa9a2566c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore ( app )
const auth = getAuth(app)