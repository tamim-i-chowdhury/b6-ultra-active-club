import React from "react";
import "./Place.css";

const Place = (props) => {
  const { name, placeInfo, img, timeRequired } = props.place;
  return (
    <div className="place">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{placeInfo}</p>
      <h5>Time Required: {timeRequired}</h5>
      <button className="btn-add-to-list">Add to list</button>
    </div>
  );
};

export default Place;
