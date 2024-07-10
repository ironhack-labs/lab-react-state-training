import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <h5>Count is {count}</h5>
        <button onClick={handleDecrement}>-</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
