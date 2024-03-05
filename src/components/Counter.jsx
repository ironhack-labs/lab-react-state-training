import React, { useState } from "react";
export const CounterButtons = () => {
  let [count, setCount] = useState(0);

  const CountUp = () => {
    setCount(count + 1);
  };
  const CountDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={CountUp}>+</button>
      <button onClick={CountDown}>-</button>
    </div>
  );
};
export default CounterButtons;
