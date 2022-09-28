import React from "react";
import Title from "../Title/Title";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-container">
      <div className="places-container">
        <Title></Title>
      </div>
      <div className="cart-container">
        <h3>Cart Container</h3>
      </div>
    </div>
  );
};

export default Activities;
