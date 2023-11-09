// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY1bhd_tcocCKnIoe9qVurCVOEx8Hl5gU",
  authDomain: "netflixgpt-4d106.firebaseapp.com",
  projectId: "netflixgpt-4d106",
  storageBucket: "netflixgpt-4d106.appspot.com",
  messagingSenderId: "89472240525",
  appId: "1:89472240525:web:02eea982ea89baed4b8bc4",
  measurementId: "G-LDPMWYW5F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();