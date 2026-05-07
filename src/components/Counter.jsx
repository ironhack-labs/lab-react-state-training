import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="display:flex">
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={count ? 
      () => setCount(count - 1) :
      () => setCount(count)} >-</button>
    </div>
  );
}
