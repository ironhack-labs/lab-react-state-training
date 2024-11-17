import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

    return (
      <div className="counter">
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  }

export default Counter;
