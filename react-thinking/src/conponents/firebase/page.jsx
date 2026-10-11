// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage' 


const firebaseConfig = {
  apiKey: "AIzaSyDzLG3o9dJ1DsLZ9usRrJT_PnWVBiAXrRk",
  authDomain: "uploadingfiles-af0d9.firebaseapp.com",
  projectId: "uploadingfiles-af0d9",
  storageBucket: "uploadingfiles-af0d9.firebasestorage.app",
  messagingSenderId: "149781558412",
  appId: "1:149781558412:web:2371de3c8bc89c15ff37a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=  getStorage(app);