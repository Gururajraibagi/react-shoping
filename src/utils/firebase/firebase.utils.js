import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMRevpmr7yB9rQTvF0aBJtbXLDlJyp-rA",
  authDomain: "gururaj-r.firebaseapp.com",
  databaseURL: "https://gururaj-r.firebaseio.com",
  projectId: "gururaj-r",
  storageBucket: "gururaj-r.appspot.com",
  messagingSenderId: "613780777452",
  appId: "1:613780777452:web:6c6af3352c2f06b38c78c9",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userrefdoc", userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  const createdAt = new Date();

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInfo,
      });
    } catch (err) {
      console.log("failed to insert login record", err);
    }
  }
  console.log("userSnapShot", userSnapShot);
  console.log("exist");
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  console.log("received email and pass and auth", email, password, auth);
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  console.log("received email and pass and auth", email, password, auth);
  return await signInWithEmailAndPassword(auth, email, password);
};

export const handleSignoutFirebase = async () => {
  return await signOut(auth);
};
