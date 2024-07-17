import React from 'react'
import { useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleIncrementCounter = () => setCounter(counter + 1);
    const handleDecrementCounter = () => setCounter(counter - 1);

  return (
    <div id='counter-container'>
        <button id='btn-counter' onClick={handleDecrementCounter}>-</button>
        <p id='counter'>{counter}</p>
        <button id='btn-counter' onClick={handleIncrementCounter}>+</button>
    </div>
  )
}

export default Counter;