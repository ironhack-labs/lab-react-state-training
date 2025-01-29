import React, { useState } from "react";

function Counter() {
  // Initialize the state for the counter with 0
  const [counter, setCounter] = useState(0);

  // Increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // Decrement the counter with a check to ensure it doesn't go below 0
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>Iteration 2</h2>
      <button onClick={increment}>+</button>
      <div> {counter}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;