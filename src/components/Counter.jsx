import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    console.log("counter incremented");
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    console.log("counter decremented");
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <button onClick={decrement}> - </button>
      <span>{count}</span>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default Counter;
