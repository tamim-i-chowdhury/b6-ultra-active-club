import React from "react";
import myFbProfile from "../../images/myFbProfile.jpeg";
import "./Cart.css";

const Cart = () => {
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
          <button>
            15<span>min</span>
          </button>
          <button>
            30<span>min</span>
          </button>
          <button>
            45<span>min</span>
          </button>
          <button>
            60<span>min</span>
          </button>
        </div>
      </div>
      <div className="tour-details">
        <h3>Tour Details</h3>
        <div className="tour-duration">
          <h4>
            Tour Duration: <span>200 mintues</span>
          </h4>
        </div>
        <div className="break-time">
          <h4>
            Break Time: <span>45 minutes</span>{" "}
          </h4>
        </div>
      </div>
      <button className="btn-completed">Activity Completed</button>
    </div>
  );
};

export default Cart;