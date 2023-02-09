// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaGbuaULTGT2mr7u5r-f3QptAymClezCw",
  authDomain: "todo2-90f17.firebaseapp.com",
  projectId: "todo2-90f17",
  storageBucket: "todo2-90f17.appspot.com",
  messagingSenderId: "451796024524",
  appId: "1:451796024524:web:3dba5f2ade872b136ed669",
  measurementId: "G-9BW89XRKRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}