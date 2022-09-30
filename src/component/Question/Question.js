import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="questions">
      <div className="question">
        <h3>How does react works?</h3>
        <p>
          <strong>
            ReactJS divides the UI into isolated reusable pieces of code known
            as components
          </strong>
          . React components work similarly to JavaScript functions as they
          accept arbitrary inputs called properties or props. It's possible to
          have as many components as necessary without cluttering your code.
        </p>
      </div>
      <div className="question">
        <h3>Difference between props and state?</h3>
        <p>
          Simply put,
          <strong>
            State is the local state of the component which cannot be accessed
            and modified outside of the component
          </strong>
          . It's equivalent to local variables in a function. Props, on the
          other hand, make components reusable by giving components the ability
          to receive data from their parent component in the form of props.
        </p>
      </div>
      <div className="question">
        <h3>What are the use of useEffect except dataLoad?</h3>
        <p>
          Running on state change: validating input field. Running on state
          change: live filtering. Running on state change: trigger animation on
          new array value. Running on props change: update paragraph list on
          fetched API data update.
        </p>
      </div>
    </div>
  );
};

export default Question;
