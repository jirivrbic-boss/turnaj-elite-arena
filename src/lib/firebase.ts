import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_nCK95RSV9qoLFcuwz4V0GKD-ISAVa4I",
  authDomain: "elite-arena-tournament-88132.firebaseapp.com",
  projectId: "elite-arena-tournament-88132",
  storageBucket: "elite-arena-tournament-88132.firebasestorage.app",
  messagingSenderId: "760217965285",
  appId: "1:760217965285:web:e4f43d291eeaff18593a0c",
  measurementId: "G-PJJPKBFZ5S",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
