import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxqmbRImT75Khn9fkULXXdsI_i-eGJFlA",
  authDomain: "entertainment-web-app-a703c.firebaseapp.com",
  projectId: "entertainment-web-app-a703c",
  storageBucket: "entertainment-web-app-a703c.appspot.com",
  messagingSenderId: "193370465127",
  appId: "1:193370465127:web:5ae34aaac1c69dff4045c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
