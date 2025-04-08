// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-CgMlGx8PWC9I-A_YMWmA6O_19HFXmAU",
  authDomain: "ellitess-7385a.firebaseapp.com",
  projectId: "ellitess-7385a",
  storageBucket: "ellitess-7385a.firebasestorage.app",
  messagingSenderId: "920499278008",
  appId: "1:920499278008:web:01b304decb38fd414be44d",
  measurementId: "G-363LWGD6DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export default app;
