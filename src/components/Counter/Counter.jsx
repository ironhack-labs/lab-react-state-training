import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <button
        className="button"
        onClick={() => {
          if (count >= 1) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <h1 className="count">{count}</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
