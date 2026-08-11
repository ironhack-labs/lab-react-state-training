import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={decreaseCount}>-</button>

      <span>{count}</span>

      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default Counter;