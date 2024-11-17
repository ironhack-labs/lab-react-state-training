import { useState } from "react";

function Counter({ className = "", min }) {
  const [count, setCount] = useState(0)

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleCountDown = () => {
    if (min === undefined || count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div className={className}>
      <div className="d-flex gap-2 align-items-center">
        <button
          className="btn btn-secondary "
          onClick={handleCountDown}
          disabled={count === min}
        >
          -
        </button>
        <p className={`mb-0 fs-2 fw-light text-center`}>{count}</p>
        <button className="btn btn-primary" onClick={handleCountUp}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
