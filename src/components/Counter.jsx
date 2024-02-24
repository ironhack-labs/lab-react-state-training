import React, { useState } from 'react';

function Counter() {
  
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
      <button onClick={decrementCounter}>-</button>
      <span> {counter} </span>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default Counter;
