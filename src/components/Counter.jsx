import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2>{num}</h2>

      <button onClick={() => setNum(num + 1)}>+</button>

      <button onClick={() => num > 0 && setNum(num - 1)}>
        -
      </button>
    </div>
  );
}