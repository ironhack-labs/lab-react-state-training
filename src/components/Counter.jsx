import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container2">
      <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
        -
      </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
