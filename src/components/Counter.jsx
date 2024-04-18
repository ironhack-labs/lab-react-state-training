import "../../src/App.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={decrementCount}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

export default Counter;
