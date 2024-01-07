// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAABlFOqeTSg1cstiAfTFWz5Z6F5d5Qt30",
  authDomain: "nitip-euy.firebaseapp.com",
  projectId: "nitip-euy",
  storageBucket: "nitip-euy.appspot.com",
  messagingSenderId: "972683475957",
  appId: "1:972683475957:web:62db2ad654d129da47bebc"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }