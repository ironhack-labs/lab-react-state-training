import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0);
  }
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <button onClick={handleClick2}>-</button>
    </div>
  );
}
