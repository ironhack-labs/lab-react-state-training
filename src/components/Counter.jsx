import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button
        onClick={() => (count <= 0 ? setCount(0) : setCount(count - 1))}
        className="decrement-btn"
      >
        -
      </button>{" "}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} className="increment-btn">
        +
      </button>
    </div>
  );
}
export default Counter;