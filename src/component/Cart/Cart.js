import React, { useState } from "react";
import myFbProfile from "../../images/myFbProfile.jpeg";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";

const Cart = ({ places }) => {
  const notify = () => toast("My activity's completed, wow!!!");
  const [breakTime, setBreakTime] = useState(0);
  const handleAddToBreakTime = (breakTimelength) => {
    setBreakTime(breakTimelength);
  };
  let totalTimeRequired = 0;
  for (const place of places) {
    totalTimeRequired += parseInt(place.timeRequired);
  }
  return (
    <div className="cart-details">
      <div className="personal-information">
        <div>
          <h3>Tamim I Chowdhury</h3>
          <h5>Tour Guide Planner</h5>
          <p>Sylhet, Bangladesh</p>
        </div>
        <img src={myFbProfile} alt="" />
      </div>
      <div className="unit-measurement">
        <div className="weight">
          <h2>
            64<span>kg</span>
          </h2>
          <p>Weight</p>
        </div>
        <div className="height">
          <h2>
            5.9<span>ft</span>
          </h2>
          <p>Height</p>
        </div>
        <div className="age">
          <h2>
            24<span>yrs</span>
          </h2>
          <p>Age</p>
        </div>
      </div>
      <div className="breaking-time">
        <h3>Add A Break</h3>
        <div className="breaking-time-container">
          <button onClick={() => handleAddToBreakTime(15)}>
            15<span>min</span>
          </button>
          <button onClick={() => handleAddToBreakTime(30)}>
            30<span>min</span>
          </button>
          <button onClick={() => handleAddToBreakTime(45)}>
            45<span>min</span>
          </button>
          <button onClick={() => handleAddToBreakTime(60)}>
            60<span>min</span>
          </button>
        </div>
      </div>
      <div className="tour-details">
        <h3>Tour Details</h3>
        <div className="tour-duration">
          <h4>
            Tour Duration: <span>{totalTimeRequired} hours</span>
          </h4>
        </div>
        <div className="break-time">
          <h4>
            Break Time: <span>{breakTime} mintues</span>
          </h4>
        </div>
      </div>
      <ToastContainer />
      <button onClick={notify} className="btn-completed">
        Activity Completed
      </button>
    </div>
  );
};

export default Cart;
