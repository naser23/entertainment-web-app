// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCH7DqbFyZn8k89JXqZIUOL-fgVSRslCoI",
  authDomain: "entertainment-web-app-f5a27.firebaseapp.com",
  projectId: "entertainment-web-app-f5a27",
  storageBucket: "entertainment-web-app-f5a27.appspot.com",
  messagingSenderId: "144112247635",
  appId: "1:144112247635:web:0817ab684a17df2a42f7a6",
  measurementId: "G-9NGK9SHLMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
