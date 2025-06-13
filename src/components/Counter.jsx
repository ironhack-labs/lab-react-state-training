import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
    </>
  );
}
export default Counter;
