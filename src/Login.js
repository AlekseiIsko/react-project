import React, { useCallback, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  const location = useLocation();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    console.log(email, password);
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="form-structor-container">
      <div className="form-structor">
        <div className={`signup ${isLogIn ? "slide-up" : ""}`}>
          <h2
            className="form-title"
            id="signup"
            onClick={() => setIsLogIn(false)}
          >
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button type="button" className="submit-btn">
            Sign up
          </button>
        </div>
        <div className={`login ${isLogIn ? "" : "slide-up"}`}>
          <div className="center">
            <h2
              className="form-title"
              id="login"
              onClick={() => setIsLogIn(true)}
            >
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button type="button" className="submit-btn">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
