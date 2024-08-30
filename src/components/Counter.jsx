import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
