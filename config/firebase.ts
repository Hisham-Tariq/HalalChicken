// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuXkyIzy9YDGeQA48HeVI2CjyAFqqI4jM",
    authDomain: "halal-chicken-us.firebaseapp.com",
    projectId: "halal-chicken-us",
    storageBucket: "halal-chicken-us.appspot.com",
    messagingSenderId: "181546946956",
    appId: "1:181546946956:web:0f956e8185ec40580306a9",
    measurementId: "G-MS23RH80ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const firebaseStorage = getStorage(app);


export { firestore, auth, firebaseStorage }
// const analytics = getAnalytics(app);