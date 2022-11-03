
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxSjDshXIWcYTc5roUt5m_javN-ePWAkY",
  authDomain: "my-chat-9ee9e.firebaseapp.com",
  projectId: "my-chat-9ee9e",
  storageBucket: "my-chat-9ee9e.appspot.com",
  messagingSenderId: "167800904567",
  appId: "1:167800904567:web:7834db033ddcd76c945f72"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();