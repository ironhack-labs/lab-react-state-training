import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const changeCount = (num) => {
    const newCount = count + num;
    if (newCount < 0) return;
    setCount(newCount);
  };
  return (
    <>
      <div>
        <button onClick={() => changeCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => changeCount(+1)}>+</button>
      </div>
    </>
  );
}

export default Counter;
