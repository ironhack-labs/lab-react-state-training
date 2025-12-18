
// This is a very simple counter
import { useState } from "react";

function Counter() {
  // count is the number, setCount changes it
  const [count, setCount] = useState(0);

  // Add 1 to count
  function addOne() {
    setCount(count + 1);
  }

  // Subtract 1 from count, but not less than 0
  function minusOne() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // Show the counter and two buttons
  return (
    <div>
      <button onClick={minusOne}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={addOne}>+</button>
    </div>
  );
}

export default Counter;
