import { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)} className="counter-button">
        -
      </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} className="counter-button">
        +
      </button>
    </div>
  );
};

export default Counter;
