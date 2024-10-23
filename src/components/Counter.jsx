import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>{count}</p>

      <button onClick={decreaseCount}>-</button>

      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default Counter;
