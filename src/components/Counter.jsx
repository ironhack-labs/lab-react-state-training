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
    <div className="counter-container">
      <button className="counter-btn" onClick={handleDecrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
