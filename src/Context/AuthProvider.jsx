import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

/* loading delay effect */

//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   all sign in func

  // Create account with Email and Passwor
  const createUserWithEP = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Create account with Google
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update profile func
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //   log in existing account

  const loginWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   log out
  const logOut = () => {
    return signOut(auth);
  };
  // on Auth State Changed Observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  console.log(user);
  const authInfo = {
    loading,
    setLoading,
    createUserWithEP,
    createUserWithGoogle,
    loginWithEP,
    googleProvider,
    user,
    setUser,
    logOut,
    updateUser,
  };
  console.log(loading);

  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
