import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Likes + </button>
      <button onClick={decrement}>Likes - </button>
    </div>
  );
};

export default Counter;