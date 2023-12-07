import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtJmoSvX2bW-F3EfigLvulnaJO70OfZfw",
  authDomain: "react-auth-f8dd7.firebaseapp.com",
  projectId: "react-auth-f8dd7",
  storageBucket: "react-auth-f8dd7.appspot.com",
  messagingSenderId: "677269845550",
  appId: "1:677269845550:web:db6ff16acbc501849591bf"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);