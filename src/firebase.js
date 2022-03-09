import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZIfB-xe6gHRx3NcyJxgYvZc1gDInahao",
  authDomain: "birdle-29bd8.firebaseapp.com",
  databaseURL:
    "https://birdle-29bd8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "birdle-29bd8",
  storageBucket: "birdle-29bd8.appspot.com",
  messagingSenderId: "222272687421",
  appId: "1:222272687421:web:61bbc3437ee7112a478954",
  measurementId: "G-FWC4VPW1E4",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
