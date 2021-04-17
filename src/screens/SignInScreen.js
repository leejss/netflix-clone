import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onClickSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="siginInScreen">
      <div className="login-wrapper">
        <div className="login-card">
          <form className="login-card-form">
            <h1>Sign In</h1>
            <input type="email" placeholder="Eamil" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button type="submit" onClick={onClickSignIn}>
              Sign In
            </button>
          </form>
          <h4 className="siginInScreen__message">
            <span className="siginInScreen__gray">New to Netflix?</span>{" "}
            <span className="siginInScreen__link" onClick={register}>
              Sign up now.
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
