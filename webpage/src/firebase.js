// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjXIr6-gNGuKFLqC3akWXKqkua-pHaUGE",
  authDomain: "take-you-web.firebaseapp.com",
  projectId: "take-you-web",
  storageBucket: "take-you-web.appspot.com",
  messagingSenderId: "498875419008",
  appId: "1:498875419008:web:3773648c63a18ebbf91965",
  measurementId: "G-N2V028T6X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);