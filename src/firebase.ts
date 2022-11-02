// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD-8WBtB3p4ea9azBLboN6wb43jek--hk",
    authDomain: "shop-cms-noxworld.firebaseapp.com",
    projectId: "shop-cms-noxworld",
    storageBucket: "shop-cms-noxworld.appspot.com",
    messagingSenderId: "665341231401",
    appId: "1:665341231401:web:645a53a37d78046d2db738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
