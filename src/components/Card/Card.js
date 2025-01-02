import React from "react";
import "./card.css";

const Card = ({ title, amount }) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <h1>{amount}</h1>
    </div>
  );
};

export default Card;
