import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <div className="counter">
      <button onClick={decrementCount}>-</button>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Counter;
