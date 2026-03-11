import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;