import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
      setCount(count + 1);
    }
    function decrement() {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
