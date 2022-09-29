import React from "react";
import Cart from "../Cart/Cart";
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
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Activities;
