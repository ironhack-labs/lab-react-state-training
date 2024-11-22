import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex" id="counters">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <h2 className="mx-3">{count}</h2>

      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
