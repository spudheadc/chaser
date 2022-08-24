// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCbl3wTiZUmTSBDQOM5gxJwdjMq_Mrqkqs",
  authDomain: "chaser-7b5ee.firebaseapp.com",
  projectId: "chaser-7b5ee",
  storageBucket: "chaser-7b5ee.appspot.com",
  messagingSenderId: "1026519968838",
  appId: "1:1026519968838:web:7de580fe045e1419d82e47",
  measurementId: "G-DPBQ1E3NNL"
};


// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);