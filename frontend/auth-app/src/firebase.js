// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mern-auth-e509d.firebaseapp.com",
  projectId: "mern-auth-e509d",
  storageBucket: "mern-auth-e509d.appspot.com",
  messagingSenderId: "840460672012",
  appId: "1:840460672012:web:ebda781d9382913ff62229",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
