import React from "react";
import { useState } from "react";
function Counter() {
  let [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(counter++);
  };
  const handleDecrease = () => {
    setCounter(counter--);
  };
  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      {counter}
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default Counter;
