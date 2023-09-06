// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVNwLXoPDIWnnvl3v6RSTvATgt-D8L4Q",
  authDomain: "netflixgpt-371ab.firebaseapp.com",
  projectId: "netflixgpt-371ab",
  storageBucket: "netflixgpt-371ab.appspot.com",
  messagingSenderId: "1032823305909",
  appId: "1:1032823305909:web:106f6c2fa16f50916970fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
