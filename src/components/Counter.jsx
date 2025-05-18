import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [numCounter, setNumCounter] = useState(0);

  return (
    <div className="counter">
      <button
        className="counter-decrement-button"
        onClick={() => {
          if (numCounter > 0) {
            setNumCounter(numCounter - 1);
          }
        }}
      >
        -
      </button>
      <p>{numCounter}</p>

      <button
        className="counter-increment-button"
        onClick={() => {
          setNumCounter(numCounter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
export default Counter;
