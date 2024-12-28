import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./signIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    const res = await signInWithPopup(auth, provider);
    const userInfo = {
      userId: res.user.uid,
      name: res.user.displayName,
      isAuth: true,
    };

    localStorage.setItem("auth", JSON.stringify(userInfo));
    navigate("/dashboard");
  };
  return (
    <div className="sign-in-container">
      <div className="circle-left"></div>
      <div className="circle-right"></div>
      <div className="header-container">
        <p>Track your expenses</p>
      </div>
      <div className="main-text-container">
        <p>Track your spending and stay on top of your budget.</p>
      </div>
      <button className="sign-in-btn" onClick={signIn}>
        {<FcGoogle />} Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
