import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo_NqBZMGbJ2KbCY6zN6aSc0A_qoCuXAs",
  authDomain: "crwn-db-25891.firebaseapp.com",
  projectId: "crwn-db-25891",
  storageBucket: "crwn-db-25891.appspot.com",
  messagingSenderId: "322988561182",
  appId: "1:322988561182:web:c3d1169eb60bfb53d6af0f",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const getUserDocFromAuth = async function (userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userAuth);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userDocRef;
};
