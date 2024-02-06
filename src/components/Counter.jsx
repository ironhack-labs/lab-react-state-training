import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementButtonClick = () => {
    setCounter((prev) => prev + 1);
  };
  const decrementButtonClick = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="counter">
      <button onClick={incrementButtonClick}>+</button>
      <div>{counter}</div>
      <button onClick={decrementButtonClick}>-</button>
    </div>
  );
};
