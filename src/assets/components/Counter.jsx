import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleCounterUp = () => setCount(count + 1);
  const handleCounterDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleCounterDown}>-</button>
      <span>{count}</span>
      <button onClick={handleCounterUp}>+</button>
    </div>
  );
}

export default Counter;