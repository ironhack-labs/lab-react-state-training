import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{count}</p>

      <button onClick={increase}>+</button>

      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;