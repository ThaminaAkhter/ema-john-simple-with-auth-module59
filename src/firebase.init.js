// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9efo47NaCcCWclqsK89JYhYakyqwD2Ro",
  authDomain: "ema-john-simple-7cc1b.firebaseapp.com",
  projectId: "ema-john-simple-7cc1b",
  storageBucket: "ema-john-simple-7cc1b.appspot.com",
  messagingSenderId: "172187199647",
  appId: "1:172187199647:web:8bdd2c54c57f96ee835aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;