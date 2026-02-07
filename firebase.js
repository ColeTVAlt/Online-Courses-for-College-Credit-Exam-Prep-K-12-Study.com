// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArnV-7VBSkliwSsdbRUtVn7cN3fSpGEPc",
  authDomain: "silk-a4925.firebaseapp.com",
  projectId: "silk-a4925",
  storageBucket: "silk-a4925.firebasestorage.app",
  messagingSenderId: "1006357988949",
  appId: "1:1006357988949:web:5274eba2deb45f300c36dc",
  measurementId: "G-C7JWYCBS7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);