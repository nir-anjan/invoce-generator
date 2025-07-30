// Utility functions for Firebase email/password authentication
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

export async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}
