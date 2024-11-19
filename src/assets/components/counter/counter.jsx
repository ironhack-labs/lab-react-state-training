import React, { useState } from 'react';

const Counter = () => {
 
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };

 
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
