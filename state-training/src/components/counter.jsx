import "../App.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button type="button" onClick={increment}>
        +
      </button>
      <span>{count}</span>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
