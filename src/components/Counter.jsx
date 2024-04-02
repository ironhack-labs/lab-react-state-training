import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button
        className="counterButton"
        onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        <p>-</p>
      </button>
      <p>{counter}</p>
      <button
        className="counterButton"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        <p>+</p>
      </button>
    </div>
  );
}

export default Counter;
