import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button onClick={increment} className="counterBtn">
        <span> + </span>
      </button>
      {count}
      <button onClick={decrement} className="counterBtn">
        <span> - </span>
      </button>
    </>
  );
}
export default Counter;
