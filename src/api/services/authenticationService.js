// Firebase Authentication
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const signInToAuthenticationService = async (email, password) => {
  // Start getAuth
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Authentication is ok
    const user = userCredential.user;
    // Return user
    return user;
  } catch (error) {
    throw error;
  }
};
