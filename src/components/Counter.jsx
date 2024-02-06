import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
          -
        </button>
      </h3>
    </div>
  );
}
