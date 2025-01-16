import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHVrg-mXMAzQ2UPHuqweeGBM-8CZtOFQk",
  authDomain: "clothweb-dcbbe.firebaseapp.com",
  projectId: "clothweb-dcbbe",
  storageBucket: "clothweb-dcbbe.firebasestorage.app",
  messagingSenderId: "297519134965",
  appId: "1:297519134965:web:03ea842da1255b29f1adbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
