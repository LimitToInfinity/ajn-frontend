// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIDx7Qhx8HqEWYr3iT8HTbyoDfdvdUoIM",
  authDomain: "fibernfrosting.firebaseapp.com",
  projectId: "fibernfrosting",
  storageBucket: "fibernfrosting.firebasestorage.app",
  messagingSenderId: "786272980337",
  appId: "1:786272980337:web:f946d939f204f5de19fad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
