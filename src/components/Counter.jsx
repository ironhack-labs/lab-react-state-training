// src/components/Counter.jsx

import React, { useState } from "react";
import "./Counter.css"; // Ensure you have this CSS file

function Counter() {
  // Step 2: Initialize state
  const [count, setCount] = useState(0);

  // Step 3: Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Step 4: Decrement function with a check to prevent negative values
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Step 5: Render the component
  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
