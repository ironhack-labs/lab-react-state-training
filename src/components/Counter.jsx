import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (e) => {
    if (e.target.name === "minus" && counter > 0) {
      setCounter(counter - 1);
    } else if (e.target.name === "plus") {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="counter flex-container">
      <button name="minus" onClick={(event) => updateCounter(event)}>
        -
      </button>
      <span>{counter}</span>
      <button name="plus" onClick={(event) => updateCounter(event)}>
        +
      </button>
    </div>
  );
};
