import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="Counter">
      <h2>Counter</h2>
      <p> You clicked {count} times! </p>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default Counter;
