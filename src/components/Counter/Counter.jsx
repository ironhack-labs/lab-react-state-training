import React from "react";
import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  function handleMinus() {
    setCount(count - 1);
  }
  function handlePlus() {
    setCount(count + 1);
  }
  return (
    <div className="counterContainer">
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default Counter;
