import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button
        style={{
          background: "blue",
        }}
        onClick={decrement}
      >
        -
      </button>
      <h1 style={{ margin: 0 }}>{count}</h1>
      <button
        style={{
          background: "blue",
        }}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
