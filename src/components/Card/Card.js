import React from "react";
import "./card.css";

const Card = ({ title, amount }) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      {amount >= 0 ? <h1>${amount}</h1> : <h1>-${amount * -1}</h1>}
    </div>
  );
};

export default Card;
