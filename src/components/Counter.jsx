import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <p>{counter}</p>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Counter;