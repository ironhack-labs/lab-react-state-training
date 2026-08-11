import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleDecreaseButton = () => {
    if (counter <= 0) {
      return
    }

    setCounter(counter - 1);
  }
  const handleIncreaseButton = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="counter">
      <button onClick={handleDecreaseButton}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncreaseButton}>+</button>
    </div>
  );
}

export default Counter;