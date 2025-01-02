import React from "react";
import "./header.css";

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("auth"));

  return (
    <div className="header-container">
      <div className="header-right">
        <img src={userInfo.photo} alt="user-photo" />
        <div className="name">{userInfo.name}</div>
      </div>
    </div>
  );
};

export default Header;
