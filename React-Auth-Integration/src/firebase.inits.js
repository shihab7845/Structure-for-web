// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuKYWQMBE0MEzKlXuamoIGTr8GH53Jkxw",
  authDomain: "email-password-authentic-9e2ed.firebaseapp.com",
  projectId: "email-password-authentic-9e2ed",
  storageBucket: "email-password-authentic-9e2ed.firebasestorage.app",
  messagingSenderId: "727763972665",
  appId: "1:727763972665:web:c4a12ae049cba91b3013e8",
  measurementId: "G-P9F4Q17LD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;