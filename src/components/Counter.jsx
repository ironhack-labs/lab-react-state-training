import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

return (
  <div className="counter">
    <button onClick={handleMinus}>-</button>
    <p>{count}</p>
    <button onClick={handlePlus}>+</button>
  </div>
);
}

export default Counter;