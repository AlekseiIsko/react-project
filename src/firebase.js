import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useState, useEffect, useContext, createContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyABlLQi0iUlVGlUe7vtsxCOF_jAGqf2J5w",
  authDomain: "project-1563f.firebaseapp.com",
  projectId: "project-1563f",
  storageBucket: "project-1563f.appspot.com",
  messagingSenderId: "46650209906",
  appId: "1:46650209906:web:223d901da797401c7df4eb",
  measurementId: "G-R62XY3T2ER",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        error,
      }}
      {...props}
    />
  );
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return {
    ...auth,
    isAuthenticated: auth.user != null,
  };
};
