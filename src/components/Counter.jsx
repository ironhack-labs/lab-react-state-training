import React from "react";
import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default Counter;
