import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) setCount(count - 1); 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

