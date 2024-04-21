import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <h2>Iteration 2 - counter</h2>
      <div className="counterdiv">
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
