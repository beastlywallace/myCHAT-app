  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJIkO2vtyJXKgLvz19pjLBJTNTj3m0zJ8",
  authDomain: "chatapp-5045f.firebaseapp.com",
  projectId: "chatapp-5045f",
  storageBucket: "chatapp-5045f.appspot.com",
  messagingSenderId: "759922077037",
  appId: "1:759922077037:web:debe6cd13f46c03d59be64",
  measurementId: "G-YHJZHXNWKG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
// Create a root reference
export const storage = getStorage();