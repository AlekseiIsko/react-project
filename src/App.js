import React, { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import { AuthContextProvider, useAuthState } from "./firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABlLQi0iUlVGlUe7vtsxCOF_jAGqf2J5w",
  authDomain: "project-1563f.firebaseapp.com",
  projectId: "project-1563f",
  storageBucket: "project-1563f.appspot.com",
  messagingSenderId: "46650209906",
  appId: "1:46650209906:web:223d901da797401c7df4eb",
  measurementId: "G-R62XY3T2ER",
};

const App = () => {
    useEffect(() => {
      const app = initializeApp(firebaseConfig);
      // const db = getFirestore(app);
      // const analytics = getAnalytics(app);
    }, []);

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
