import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from "firebase/firebase";

const firebaseConfig = {
    apiKey: import.meta.evn.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.evn.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.evn.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.evn.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.evn.VITE_FIREBASE_MESSAGING_SENDER_ID,
    authDomain: import.meta.evn.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

//Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);
