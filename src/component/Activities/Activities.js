import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Places from "../Places/Places";
import Title from "../Title/Title";
import "./Activities.css";

const Activities = () => {
  const [places, setPlaces] = useState([]);
  const handleAddToCart = (place) => {
    const newPlaces = [...places, place];
    setPlaces(newPlaces);
  };
  return (
    <div className="activities-container">
      <div className="amazing-sylhet-container">
        <Title></Title>
        <Places handleAddToCart={handleAddToCart}></Places>
      </div>
      <div className="cart-container">
        <Cart places={places}></Cart>
      </div>
    </div>
  );
};

export default Activities;
