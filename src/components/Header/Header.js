import React from "react";
import { useNavigate } from "react-router-dom";
import { PiSignOut } from "react-icons/pi";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();
  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("auth");
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="header-container">
      <div className="header-right">
        <img src={userInfo.photo} alt="user-photo" />
        <div className="name">{userInfo.name}</div>
        <div className="sign-out-btn" onClick={signUserOut}>
          <PiSignOut />
        </div>
      </div>
    </div>
  );
};

export default Header;
