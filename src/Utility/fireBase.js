import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCoeg2DUMe2OtIJAbbBE2lzUDmU3lGxr4",
  authDomain: "clone-57ea4.firebaseapp.com",
  projectId: "clone-57ea4",
  storageBucket: "clone-57ea4.appspot.com",
  messagingSenderId: "63928822828",
  appId: "1:63928822828:web:b9b61683d7fede7f4b7589",
  measurementId: "G-MTF1P4Y1YZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
