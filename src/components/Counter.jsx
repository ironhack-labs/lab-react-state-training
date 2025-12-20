import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default Counter;