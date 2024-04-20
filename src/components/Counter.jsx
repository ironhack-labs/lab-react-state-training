import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decrementCount}> - </button>
      <span>{count}</span>
      <button onClick={incrementCount}> + </button>
    </div>
  );
}

export default Counter;
