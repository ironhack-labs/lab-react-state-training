import { useState } from "react";

function Counter({ initialCountValue = 0, max,children }) {
  const [count, setCount] = useState(initialCountValue);
  const handleCountDown = () => {
    if (count <= max) {
      setCount(count - 1);
    }
    if (count <= 0) {
      setCount(0);
    }
  };
  const handleCountUp = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  return (
    <div className="container border border-primary w-50 h-25 ">
      <button className="btn btn-secondary btn-sm" onClick={handleCountDown}>
        -
      </button>
      <span>{count}</span>
      <button className="btn btn-secondary btn-sm" onClick={handleCountUp}>
        +
      </button>
    </div>
  );
}
export default Counter;
