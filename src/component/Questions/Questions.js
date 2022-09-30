import React from "react";
import Question from "../Question/Question";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions-container">
      <hr />
      <h2>Most Common Questions in JS</h2>
      <Question></Question>
    </div>
  );
};

export default Questions;
