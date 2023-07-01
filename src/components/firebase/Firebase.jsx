// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,doc, setDoc ,collection ,addDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logincontext } from "../global/contex";
import { useContext } from 'react'; //usecontext
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET , 
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth=getAuth(app);
const storage = getStorage(app);
  
  export default app;
  export {db};
  export {storage}