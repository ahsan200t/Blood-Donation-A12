/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (fullName, photoURL, email) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
      email: email,
    });
  };

  // save user
  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: "donor",
      status: "active",
    };
    const { data } = await axios.put("http://localhost:5000/user", currentUser);
    return data;
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (user) {
        saveUser(currentUser);
      } else {
        setUser(false);
      }
    });
    return () => unSubscribe();
  }, [user]);

  const logOut = async () => {
    setLoading(true);
    //    const {data}= await axios("http://localhost:5000/logout", {withCredentials:true})
    //    console.log(data)
    setUser(false);

    return signOut(auth);
  };
  const userInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
