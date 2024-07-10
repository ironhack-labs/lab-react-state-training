import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {count}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
