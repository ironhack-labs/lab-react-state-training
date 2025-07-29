import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="button-container">
        <button onClick={() => increaseCount()} className="button-color">
          +
        </button>
        <span>{count}</span>
        <button onClick={() => decreaseCount()} className="button-color">
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
