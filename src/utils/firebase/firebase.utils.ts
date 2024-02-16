/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocument = async (userAuth: any) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email, 
                createdAt
            })
        } catch (error: any) {
            console.log(`Error creating user ${error.message}`)
    } 
    }

    return userDocRef;
}