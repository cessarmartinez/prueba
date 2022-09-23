// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVzfz6ZDvp47sDPciVIwXOqCa5fTXv_SM",
  authDomain: "proyecto-reactjs-57781.firebaseapp.com",
  projectId: "proyecto-reactjs-57781",
  storageBucket: "proyecto-reactjs-57781.appspot.com",
  messagingSenderId: "1069202048481",
  appId: "1:1069202048481:web:26e5d02d4753268ddb3ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
