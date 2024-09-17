// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQRPjY1DRP9w0l9df0P5ftbH5oZV3YDYQ",
  authDomain: "clientes-web-fd2f7.firebaseapp.com",
  projectId: "clientes-web-fd2f7",
  storageBucket: "clientes-web-fd2f7.appspot.com",
  messagingSenderId: "309350338759",
  appId: "1:309350338759:web:c4af6df565418db3756ee2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
