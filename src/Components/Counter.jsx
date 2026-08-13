import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const handleIncrementClick = () => {
    setCounter(counter + 1);
  };

  const handleDecrementClick = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <div className="counter-buttons">
      <button onClick={handleIncrementClick}> + </button>
      <p> {counter} </p>
      <button onClick={handleDecrementClick}> - </button>
    </div>
  );
};

export default Counter;
