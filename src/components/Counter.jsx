import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  }

  return (
    <div className="Counter">
      <button onClick={decrement}>-</button>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
