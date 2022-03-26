// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfOShC_KbOTVGPgifkibkNu4S-Spn5Oks",
  authDomain: "wahnish-ecommerce-coderhouse.firebaseapp.com",
  projectId: "wahnish-ecommerce-coderhouse",
  storageBucket: "wahnish-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "963271808382",
  appId: "1:963271808382:web:a499b597769853b17c8f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();