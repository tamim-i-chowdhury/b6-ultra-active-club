import React from "react";
import "./Place.css";

const Place = ({ handleAddToCart, place }) => {
  const { name, placeInfo, img, timeRequired } = place;
  return (
    <div className="place">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{placeInfo}</p>
      <h5>Time Required: {timeRequired}</h5>
      <button
        onClick={() => handleAddToCart(place)}
        className="btn-add-to-list"
      >
        Add to list
      </button>
    </div>
  );
};

export default Place;
