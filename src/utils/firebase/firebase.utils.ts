import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACatB_16i2jT4PJsrcJZKpx_EndBR6W-o",
    authDomain: "icestore-d6c56.firebaseapp.com",
    projectId: "icestore-d6c56",
    storageBucket: "icestore-d6c56.appspot.com",
    messagingSenderId: "312053703455",
    appId: "1:312053703455:web:01921278c3753085a4c62a"
  };

  // Initialise Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);