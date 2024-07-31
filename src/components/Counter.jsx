import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const countHandler = (int) => {
    if (count + int <= 0) {
      setCount(0);
      return;
    }
    setCount(count + int);
  };

  return (
    <div>
      <button onClick={() => countHandler(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => countHandler(+1)}>+</button>
    </div>
  );
}
