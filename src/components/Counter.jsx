import "./Counter.css";
import { useState } from "react";

export const Counter = () => {
  const [counterState, setCounterState] = useState(0);

  const incrementCounter = () => {
    setCounterState(counterState + 1);
  };

  const decrementCounter = () => {
    setCounterState(counterState - 1);
  };

  return (
    <div className="counter">
      <button onClick={decrementCounter}>-</button>
      <div>{counterState}</div>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};
