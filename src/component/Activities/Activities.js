import React from "react";
import Cart from "../Cart/Cart";
import Places from "../Places/Places";
import Title from "../Title/Title";
import "./Activities.css";

const Activities = () => {
  let time;
  const handleAddToCart = (timeRequired) => {
    time = parseInt(timeRequired) * 60;
  };
  return (
    <div className="activities-container">
      <div className="amazing-sylhet-container">
        <Title></Title>
        <Places handleAddToCart={handleAddToCart}></Places>
      </div>
      <div className="cart-container">
        <Cart time={time}></Cart>
      </div>
    </div>
  );
};

export default Activities;
