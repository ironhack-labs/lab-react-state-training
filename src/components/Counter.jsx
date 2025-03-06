import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(() => 0);

  const increment = () => setCounter((prevCount) => prevCount + 1);

  const decrement = () => setCounter((prevCount) => prevCount - 1);

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}
