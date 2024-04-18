// src/components/Counter.jsx

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <span>{count}</span>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Counter;
