import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <Nav />
      <div className="profileScreen">
        <div className="profileScreen__body">
          <h1>Edit Profile</h1>
          <div className="profileScreen__info">
            <img
              src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
              alt="netflix-profile"
            />
            <div className="profileScreen__details">
              <h2>{user.email}</h2>
              <div className="profileScreen__details__plans">
                <h3>Plans</h3>
                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen__signOut"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
