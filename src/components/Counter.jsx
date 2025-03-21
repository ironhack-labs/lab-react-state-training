import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter-btn" onClick={decreaseCounter}>
        -
      </button>
      <p>{count}</p>
      <button className="counter-btn" onClick={increaseCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
