import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCc_BJwaGZz5Bxi3LedoZmknVcyvmv0kPk",
  authDomain: "chatsmith-48efb.firebaseapp.com",
  projectId: "chatsmith-48efb",
  storageBucket: "chatsmith-48efb.appspot.com",
  messagingSenderId: "950740455504",
  appId: "1:950740455504:web:7c0f62ae669a97c14d4155",
  measurementId: "G-6VQ5SM2R4Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;


