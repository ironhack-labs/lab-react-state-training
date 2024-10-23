import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="counter">
      <button onClick={decreaseCounter}> - </button>
      <p>{counter}</p>
      <button onClick={increaseCounter}> + </button>
    </div>
  );
};

export default Counter;
