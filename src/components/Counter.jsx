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
      <button onClick={decrease}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;