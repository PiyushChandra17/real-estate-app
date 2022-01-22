import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCT6E3o1Q4rd5GBar-5r7-nb658GDp7pkY",
  authDomain: "real-estate-app-1f558.firebaseapp.com",
  projectId: "real-estate-app-1f558",
  storageBucket: "real-estate-app-1f558.appspot.com",
  messagingSenderId: "944988078134",
  appId: "1:944988078134:web:0dbea2aaf16269c341d897",
  measurementId: "G-JHXR2F7L92"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()