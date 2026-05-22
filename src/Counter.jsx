import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button className="counter-btn" onClick={() => setCount(count - 1 >= 0 ? count - 1 : 0)}>
        −
      </button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;