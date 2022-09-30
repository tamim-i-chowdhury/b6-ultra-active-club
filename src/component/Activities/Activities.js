import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Places from "../Places/Places";
import Title from "../Title/Title";
import "./Activities.css";

const Activities = () => {
  let time = 0;
  const [totalTime, setTotalTime] = useState(0);
  const handleAddToCart = (timeRequired) => {
    time = time + parseInt(timeRequired);
    setTotalTime(time);
  };

  return (
    <div className="activities-container">
      <div className="amazing-sylhet-container">
        <Title></Title>
        <Places handleAddToCart={handleAddToCart}></Places>
      </div>
      <div className="cart-container">
        <Cart totalTime={totalTime}></Cart>
      </div>
    </div>
  );
};

export default Activities;
