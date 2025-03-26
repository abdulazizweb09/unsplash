// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBflgREQAmv8TasyXT3r6TIuY8s5wDCmO8",
  authDomain: "my-project-81d44.firebaseapp.com",
  projectId: "my-project-81d44",
  storageBucket: "my-project-81d44.firebasestorage.app",
  messagingSenderId: "257383060844",
  appId: "1:257383060844:web:ec6a88d0d2be243ec64f49",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);