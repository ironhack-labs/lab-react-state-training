// ### Iteration 2 | `Counter`

// Create a `Counter` component that displays the initial counter value of `0`.
// The component should have two buttons <kbd>+</kbd> and <kbd>-</kbd>.

// - The <kbd>+</kbd> button should *increment* the counter when clicked.
// - The <kbd>-</kbd> button should *decrement* the counter when clicked.

// Additionally, implement a check to make sure that the counter value never goes below `0`.

import React, { useState } from "react";
import "../css/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
