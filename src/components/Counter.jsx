import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <button className="counterButton" onClick={decrement}>
        -
      </button>
      <h2 className="countNum">{count}</h2>
      <button className="counterButton" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
