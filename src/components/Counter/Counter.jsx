import React, { useState } from "react";
import Panel from "../UI/Panel/Panel";

function Counter({ min = 0, className = "" }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <Panel className={`d-flex gap-2 align-items-center justify-content-center ${className}`}>
      <button className="btn btn-primary btn-sm" onClick={handleIncrement}> + </button>
      <p className="m-0 fs-2 p-3 text-center">{count}</p>
      <button className="btn btn-primary btn-sm" onClick={handleDecrement} disabled={count <= min}> - </button>
    </Panel>
  );
}

export default Counter;



