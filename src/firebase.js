import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbRyD4z_NJgfdX0x3qCG4EADgBrEjwZQQ",
  authDomain: "chat-40779.firebaseapp.com",
  projectId: "chat-40779",
  storageBucket: "chat-40779.appspot.com",
  messagingSenderId: "221601823290",
  appId: "1:221601823290:web:3133f1d74ce1bf6aa91303"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()