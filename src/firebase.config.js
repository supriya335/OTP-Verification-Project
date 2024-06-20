// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ZSks9ThN0QUFvqDi6XuKpdplvhQRxu8",
  authDomain: "otp-verification-2dd0e.firebaseapp.com",
  projectId: "otp-verification-2dd0e",
  storageBucket: "otp-verification-2dd0e.appspot.com",
  messagingSenderId: "1051983674062",
  appId: "1:1051983674062:web:0f5c44cfc1757ee3562e9f",
  measurementId: "G-HNWQG5BKKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);