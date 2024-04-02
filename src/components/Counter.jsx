import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        type="button"
        onClick={() => (count > 0 ? setCount(count - 1) : setCount(count))}
      >
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}

export default Counter;
