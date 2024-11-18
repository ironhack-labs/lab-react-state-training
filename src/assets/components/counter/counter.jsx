import { useState } from "react";

function Counter({ className = "" }) {
  const [count, setCount] = useState(0);

  const handelCountDown = () => {
    setCount(count - 1);
  };

  const handelCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className={`d-flex gap-4 border p-2 ${className}`}>
      <button className="btn btn-primary" onClick={handelCountDown}>
        -
      </button>
      <p className="fs-2">{count}</p>
      <button className="btn btn-primary" onClick={handelCountUp}>+</button>
    </div>
  );
}

export default Counter;
