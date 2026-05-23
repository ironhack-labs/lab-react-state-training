import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClickDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleClickIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter-div">
      <button onClick={handleClickDecrement}> - </button>
      <span>{count}</span>
      <button onClick={handleClickIncrement}> + </button>
    </div>
  );
}

export default Counter;
