import { useState } from "react";

function Counter() {
  const [counterNumber, setCounterNumber] = useState(0);

  const handleClickDecreasing = () => {
    setCounterNumber(counterNumber - 1);
  };

  const handleClickIncreasing = () => {
    setCounterNumber(counterNumber + 1);
  };

  return (
    <div className="counter-container">
      <button className="minus-btn" onClick={handleClickDecreasing}>- </button> {counterNumber} <button className="plus-btn" onClick={handleClickIncreasing}>+</button>
    </div>
  );
}

export default Counter;
