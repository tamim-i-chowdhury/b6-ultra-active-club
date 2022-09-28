import React from "react";
import Title from "../Title/Title";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-container">
      <Title></Title>
      <div className="places-container">
        <h3>Activities Places</h3>
      </div>
      <div className="cart-container">
        <h3>Cart Activities</h3>
      </div>
    </div>
  );
};

export default Activities;
