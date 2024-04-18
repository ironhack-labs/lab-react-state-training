import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="Counter">
      <button onClick={decrementCount}> - </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

export default Counter;
