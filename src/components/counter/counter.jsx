import { useState } from "react";


function Counter ({ className = 'd-inline-flex', initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const handleCountDown = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className={`border bg-secondary-subtle rounded p-2 d-flex justify-content-center gap-2 ${className}`}>
      <button className="btn btn-secondary btn-sm" onClick={handleCountDown}>
        <i className="fa fa-minus"></i>
      </button>
      <span className="fs-3">{count}</span>
      <button className="btn btn-primary btn-sm" onClick={handleCountUp}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}

export default Counter;