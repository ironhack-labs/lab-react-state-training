import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const changeCount = (int) => {
    const newCount = count + int;
    if (newCount < 0) return;
    setCount(newCount);
  };

  return (
    <div>
      <button onClick={() => changeCount(1)}>+</button>
      {count}
      <button onClick={() => changeCount(-1)}>-</button>
    </div>
  );
}

export default Counter;
