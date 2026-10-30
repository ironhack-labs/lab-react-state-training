import { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
