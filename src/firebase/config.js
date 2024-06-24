import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoqHEl-vAbFKif_Um4KelrHsdZrojyiZk",
    authDomain: "mdshop-a294f.firebaseapp.com",
    projectId: "mdshop-a294f",
    storageBucket: "mdshop-a294f.appspot.com",
    messagingSenderId: "889048225241",
    appId: "1:889048225241:web:4c89f9fa66e5640c85f5c8",
    measurementId: "G-XHC3L3B9K3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);