import React, { useEffect, useState } from "react";
import Place from "../Place/Place";
import "./Places.css";

const Places = (props) => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="places-section">
      <h2>Things to Do in Sylhet City</h2>
      <div className="places-container">
        {places.map((place) => (
          <Place
            place={place}
            handleAddToCart={props.handleAddToCart}
            key={place.id}
          ></Place>
        ))}
      </div>
    </div>
  );
};

export default Places;
