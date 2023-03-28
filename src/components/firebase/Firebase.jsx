// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChgcrlDreKRyxgWFZ3cTHRLZAJGM-oq2E",
  authDomain: "shopoholic-138fd.firebaseapp.com",
  projectId: "shopoholic-138fd",
  storageBucket: "shopoholic-138fd.appspot.com",
  messagingSenderId: "161150128355",
  appId: "1:161150128355:web:0fcfda2987a1c25a7a75d6",
  measurementId: "G-HD3S2X04GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;