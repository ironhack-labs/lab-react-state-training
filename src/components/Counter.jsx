import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((count) => (count > 0 ? count - 1 : count));
  const increment = () => setCount((count) => count + 1);

  return (
    <div className="contador">
      
      <button className="counterSuma" onClick={decrement}>
        -
      </button>
      <p className="counter">{count}</p>
      <button className="counterMenos" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
