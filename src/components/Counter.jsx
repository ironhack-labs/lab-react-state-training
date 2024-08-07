import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter((c) => (c > 0 ? --c : c))}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter((c) => ++c)}>+</button>
    </div>
  );
}

export default Counter;
