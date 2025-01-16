import React from "react";
import { useNavigate } from "react-router-dom";
import { PiSignOut } from "react-icons/pi";
import "./header.css";
import { signOut } from "firebase/auth";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
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
      <div className="header-left">
        <img src={userInfo.photo} alt="user-photo" />
        <div className="name">{userInfo.name}</div>
      </div>

      <div className="header-middle">
        <div className="header-category" onClick={() => navigate("/dashboard")}>
          <div className="header-icon">
            <MdOutlineDashboard />
          </div>
          <div className="header-text">Dashboard</div>
        </div>

        <div
          className="header-category"
          onClick={() => navigate("/transactions")}
        >
          <div className="header-icon">
            <GrTransaction />
          </div>
          <div className="header-text">Transactions</div>
        </div>

        <div className="header-category">
          <div className="header-icon">
            <IoMdAddCircleOutline />
          </div>
          <div className="header-text">Add transaction</div>
        </div>
      </div>

      <div className="header-right">
        <div className="sign-out-btn" onClick={signUserOut}>
          <PiSignOut />
        </div>
      </div>
    </div>
  );
};

export default Header;
