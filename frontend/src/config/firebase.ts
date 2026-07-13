// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1g40Tyd5VoQJKJWpG8Ihz-NNrXcKK6PA",
  authDomain: "edust-a755e.firebaseapp.com",
  projectId: "edust-a755e",
  storageBucket: "edust-a755e.firebasestorage.app",
  messagingSenderId: "10499475773",
  appId: "1:10499475773:web:47bc0f65630ad873e8dd54",
  measurementId: "G-00L7WVDNH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth
export const analytics = getAnalytics(app);