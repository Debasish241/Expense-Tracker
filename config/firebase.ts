// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH8ZaifXGIFO3HVWdtiJTehPxzUBCmfyc",
  authDomain: "expense-traccker-5677e.firebaseapp.com",
  projectId: "expense-traccker-5677e",
  storageBucket: "expense-traccker-5677e.firebasestorage.app",
  messagingSenderId: "430810341261",
  appId: "1:430810341261:web:d5732bf79761d5fbeba7c4",
  measurementId: "G-CQP8SV1HLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
