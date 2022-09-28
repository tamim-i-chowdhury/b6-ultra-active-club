import React, { useEffect, useState } from "react";

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div>
      <h2>Things to Do in Sylhet City</h2>
    </div>
  );
};

export default Places;
