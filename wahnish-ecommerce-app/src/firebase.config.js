// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxoWIgnurEL8NOgevGiHi3yFjGwLulvFk",
  authDomain: "wahnish-ecommerce-coderh-53b60.firebaseapp.com",
  projectId: "wahnish-ecommerce-coderh-53b60",
  storageBucket: "wahnish-ecommerce-coderh-53b60.appspot.com",
  messagingSenderId: "525920984097",
  appId: "1:525920984097:web:7acf5b780902212c999760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();