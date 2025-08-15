import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <span>
        <button onClick={() => setNumber((num) => (num === 0 ? 0 : num - 1))}>
          -
        </button>
        {number}
        <button onClick={() => setNumber((num) => num + 1)}>+</button>
      </span>
    </div>
  );
}
