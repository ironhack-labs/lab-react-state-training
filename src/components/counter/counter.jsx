import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter, ensuring it doesn't go below 0
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={decrement} disabled={counter === 0}>
        -
      </button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
