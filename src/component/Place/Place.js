import React from "react";
import "./Place.css";

const Place = (props) => {
  const { name, placeInfo, img, timeRequired } = props.place;
  return (
    <div className="place">
      <img src={img} alt="" />
    </div>
  );
};

export default Place;
