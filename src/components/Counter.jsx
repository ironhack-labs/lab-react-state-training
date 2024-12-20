import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decreaseCount}> - </button>
      <p>{count}</p>
      <button onClick={increaseCount}> + </button>
    </div>
  );
}

export default Counter;
