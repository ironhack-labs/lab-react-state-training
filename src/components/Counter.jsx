import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default Counter;