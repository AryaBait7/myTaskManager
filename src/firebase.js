// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdDjmHSkab4nMaYyf9QDW0QuQyPeJEA5g",
  authDomain: "todo-app-yt-dc1f5.firebaseapp.com",
  projectId: "todo-app-yt-dc1f5",
  storageBucket: "todo-app-yt-dc1f5.appspot.com",
  messagingSenderId: "655738766980",
  appId: "1:655738766980:web:f36b8b1f159a82e1e2a4d1",
  measurementId: "G-L1DW1QN6D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)