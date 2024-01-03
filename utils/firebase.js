// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "blogapp-da46c.firebaseapp.com",
    projectId: "blogapp-da46c",
    storageBucket: "blogapp-da46c.appspot.com",
    messagingSenderId: "182015047898",
    appId: "1:182015047898:web:4689ca36eff817f1028de3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
