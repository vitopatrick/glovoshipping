// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDbN48Xj4mGMX6WprxSCpueXpOgqOa6uY",
  authDomain: "glovoshipping-1942a.firebaseapp.com",
  projectId: "glovoshipping-1942a",
  storageBucket: "glovoshipping-1942a.appspot.com",
  messagingSenderId: "355802416031",
  appId: "1:355802416031:web:f2b66c113e0952920273aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
