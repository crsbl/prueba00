// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqw23ZZW0HI9XUSGajd4umlEEdoSXzC5s",
  authDomain: "prue-9185b.firebaseapp.com",
  databaseURL: "https://prue-9185b-default-rtdb.firebaseio.com",
  projectId: "prue-9185b",
  storageBucket: "prue-9185b.appspot.com",
  messagingSenderId: "114191674798",
  appId: "1:114191674798:web:e3b39b60eace514c082c3f",
  measurementId: "G-ETLZ0JEP2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Db = getFirestore(app);

