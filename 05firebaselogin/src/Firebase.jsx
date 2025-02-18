import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4ueuwBAhaZbEWU8I9923s_dt6Dw9wXW0",
  authDomain: "login-acbf0.firebaseapp.com",
  projectId: "login-acbf0",
  storageBucket: "login-acbf0.firebasestorage.app",
  messagingSenderId: "1009044113411",
  appId: "1:1009044113411:web:e0f4fca4b6a597ba85e636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };