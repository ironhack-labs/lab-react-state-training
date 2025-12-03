import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h3>Contador: {count}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement} disabled={count === 0}>-</button>
    </div>
  );
}

export default Counter;
