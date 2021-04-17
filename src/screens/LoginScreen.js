import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <div className="loginScreen__background" />
      <div className="loginScreen__gradient" />

      <header className="loginScreen__header">
        <img
          className="loginScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="loginScreen__button"
        >
          Sign In
        </button>
      </header>

      <div className="loginScreen__card__wrapper">
        {signIn ? (
          <SignInScreen />
        ) : (
          <div className="loginScreen__card ">
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
            </>
            <div className="loginScreen__input">
              <form>
                <div className="loginScreen__input__wrapper">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="loginScreen__input__email"
                  />
                  <button
                    onClick={() => {
                      setSignIn(true);
                    }}
                    className="loginScreen__input__button"
                  >
                    <span>Get Started</span>
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginScreen;
