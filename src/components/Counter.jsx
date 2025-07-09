import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(click => click + 1);
  };

  const decrease = () => {
    setCount(click => {
      if (click > 0) {
        return click - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrease}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;