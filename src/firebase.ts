// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWf856BgdvL45U5QAClLxgb-aYATX3POY",
  authDomain: "shipping-8cc01.firebaseapp.com",
  projectId: "shipping-8cc01",
  storageBucket: "shipping-8cc01.appspot.com",
  messagingSenderId: "423119659035",
  appId: "1:423119659035:web:7c9052666ba9b36980d8be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
