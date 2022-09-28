import React from "react";
import Places from "../Places/Places";
import Title from "../Title/Title";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-container">
      <div className="amazing-sylhet-container">
        <Title></Title>
        <Places></Places>
      </div>
      <div className="cart-container">
        <h3>Cart Container</h3>
      </div>
    </div>
  );
};

export default Activities;
