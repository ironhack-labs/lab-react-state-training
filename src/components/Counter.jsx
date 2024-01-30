import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>  + </button>
      { count }
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

export default Counter;
