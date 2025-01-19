import React, { useState } from "react";

function Counter({ className = "" }) {
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
    <div className="counter-contain">
      <button className="counter-button" onClick={() => decrement()}>
        {" "}
        -{" "}
      </button>
      <span className="counter-number">{count}</span>
      <button className="counter-button" onClick={() => increment()}>
        +
      </button>
    </div>
  );
}

export default Counter;
