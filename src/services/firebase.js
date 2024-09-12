// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQRPjY1DRP9w0l9df0P5ftbH5oZV3YDYQ",
  authDomain: "clientes-web-fd2f7.firebaseapp.com",
  projectId: "clientes-web-fd2f7",
  storageBucket: "clientes-web-fd2f7.appspot.com",
  messagingSenderId: "309350338759",
  appId: "1:309350338759:web:c4af6df565418db3756ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);