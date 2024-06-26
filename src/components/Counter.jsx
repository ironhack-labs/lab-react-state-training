import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}> + </button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count > 0 ? count - 1 : count)}>
        {" "}
        -
      </button>
    </>
  );
}

export default Counter;
