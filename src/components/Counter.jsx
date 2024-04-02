import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const decreamentCount = () => {
    count > 0 && setCount(count - 1);
  };
  const increamentCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="Counter">
      <button type="button" onClick={decreamentCount}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={increamentCount}>
        +
      </button>
    </div>
  );
};

export default Counter;
