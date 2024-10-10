import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0);
  }

  return (
    <div className="buttons">
      <button className="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <h3 className="count-number">{count}</h3>
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
