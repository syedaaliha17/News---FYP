import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU5tyZF6cigxSziZKqUJNlzwco85TBnLs",
  authDomain: "news-application-c9de2.firebaseapp.com",
  projectId: "news-application-c9de2",
  storageBucket: "news-application-c9de2.appspot.com",
  messagingSenderId: "534255315438",
  appId: "1:534255315438:web:442f03171a6d29f72d06ff",
  measurementId: "G-23NQTDZPL3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
