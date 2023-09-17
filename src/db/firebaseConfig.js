import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDehr1DRv_ZjOtzWHLZsUjLcoJUQSFfNgs",
  authDomain: "entregafinal-f84d4.firebaseapp.com",
  projectId: "entregafinal-f84d4",
  storageBucket: "entregafinal-f84d4.appspot.com",
  messagingSenderId: "634111924667",
  appId: "1:634111924667:web:281f4cac853f879c0f0c9e"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 