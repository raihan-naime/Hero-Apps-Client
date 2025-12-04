import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Listen for Firebase Auth user changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Signup
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 🔹 Update User Profile (name, photo)
  const updateUserProfile = (profile) => {
    if (!auth.currentUser) return;
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // 🔹 Send Password Reset Email
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // 🔹 Email Verification
  const verifyEmail = () => {
    if (!auth.currentUser) return;
    return sendEmailVerification(auth.currentUser);
  };


  const authValue = {
    user,
    loading,
    signup,
    login,
    logout,
    updateUserProfile,
    resetPassword,
    verifyEmail,
  };

  return (
    <AuthContext value={authValue}>
      {!loading && children}
    </AuthContext>
  );
};

export default AuthProvider;
