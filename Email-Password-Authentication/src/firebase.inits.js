// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJz9_vrScdKYHJ2bKALA4K-7nA2rsr_no",
  authDomain: "email-password-authentic-c24b0.firebaseapp.com",
  projectId: "email-password-authentic-c24b0",
  storageBucket: "email-password-authentic-c24b0.firebasestorage.app",
  messagingSenderId: "753459150601",
  appId: "1:753459150601:web:a91135cc40de59fa72ddd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;