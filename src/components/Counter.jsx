import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button onClick={() => setCount(count + 1)}> + </button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default Counter;
