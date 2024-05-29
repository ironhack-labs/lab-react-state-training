import React, { useState } from "react";
const Counter = () => {
  // Declare a new state variable
  const [count, setCount] = useState(0);

  // Create event handlers
  const increment = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button type="button" onClick={decrement}>
        {" "}
        -{" "}
      </button>
      <span>{count}</span>
      <button type="button" onClick={increment}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
