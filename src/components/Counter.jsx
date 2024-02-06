import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter > 0 ? counter - 1 : 0);

  return (
    <div className="Counter">
      <button onClick={decrease}>-</button>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
