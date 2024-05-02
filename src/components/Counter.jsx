import { useState } from "react";

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const handleIncrease = () => {
    setCounterValue(counterValue + 1);
  };
  const handleDecrease = () => {
    setCounterValue(counterValue - 1);
  };
  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleDecrease}>-</button>
      <h1>{counterValue}</h1>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default Counter;
