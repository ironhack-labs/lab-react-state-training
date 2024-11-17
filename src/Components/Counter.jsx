import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-wrapper">
      <button onClick={() => setCount(count==0? count : count-1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </section>
  );
}

export default Counter;
