// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDodIvoqZH0Ic9Gl6NfHnoIR5YGgUFG6Rc",
  authDomain: "blockchain-based-insurance.firebaseapp.com",
  projectId: "blockchain-based-insurance",
  storageBucket: "blockchain-based-insurance.appspot.com",
  messagingSenderId: "1018324118035",
  appId: "1:1018324118035:web:2d1710d5d4ec08ec8a6de6",
  measurementId: "G-QQPDDCZ5LN"
};

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyDodIvoqZH0Ic9Gl6NfHnoIR5YGgUFG6Rc",
//     authDomain: "blockchain-based-insurance.firebaseapp.com",
//     projectId: "blockchain-based-insurance",
//     storageBucket: "blockchain-based-insurance.appspot.com",
//     messagingSenderId: "1018324118035",
//     appId: "1:1018324118035:web:2d1710d5d4ec08ec8a6de6",
//     measurementId: "G-QQPDDCZ5LN"
//   });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth =getAuth(app)
// auth.settings.appVerificationDisabledForTesting = false;
export default app;
