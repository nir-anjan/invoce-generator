// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD0OFxSaKaGkjJ7uS6aQSZbrMyQj2NA0A",
  authDomain: "invoicegenius-ddb80.firebaseapp.com",
  projectId: "invoicegenius-ddb80",
  storageBucket: "invoicegenius-ddb80.firebasestorage.app",
  messagingSenderId: "340004667713",
  appId: "1:340004667713:web:53dfd26fd60a6795f761c0",
  measurementId: "G-QDH1PFN6YW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
