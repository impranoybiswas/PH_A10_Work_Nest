import React, { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://work-nest-server-azure.vercel.app/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch user data:", err);
          setUserData({});
          setLoading(false);
        });
    } else {
      setUserData({});
    }
  }, [user]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    setUserData({});
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (userDetails) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userDetails);
  };

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const passedValue = {
    loading,
    setLoading,
    user,
    userData,
    setUser,
    createUser,
    updateUser,
    userLogIn,
    userLogOut,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={passedValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
