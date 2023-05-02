// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default app;
export {db};