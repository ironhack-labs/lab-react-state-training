import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="Counter">
      <button className="btn" onClick={handleDecrement}>
        -
      </button>
      <p className="count">{count}</p>
      <button className="btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
