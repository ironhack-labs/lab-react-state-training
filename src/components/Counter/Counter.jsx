// ! modules
import { useState } from "react";

// ? styles
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button
        disabled={count === 0}
        onClick={() => (count > 0 ? setCount(count - 1) : 0)}
        className="counter__button"
      >
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)} className="counter__button">
        +
      </button>
    </div>
  );
}
