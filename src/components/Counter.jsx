import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={counter === 0}>
        -
      </button>
    </div>
  );
}

export default Counter;
