// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKOhhzIP1xmjGcMV3Fh9rzEBYLJm11jJE",
  authDomain: "car-doctor-dcea4.firebaseapp.com",
  projectId: "car-doctor-dcea4",
  storageBucket: "car-doctor-dcea4.appspot.com",
  messagingSenderId: "327956439651",
  appId: "1:327956439651:web:599fee2a8d900ea4c78e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;