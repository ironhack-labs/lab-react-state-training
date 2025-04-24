import React, { useState } from 'react';

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
      };
    
      const decreaseCounter = () => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      };

    return (
        <div>
            <button onClick={decreaseCounter}> - </button>
            <span>{counter}</span>
            <button onClick={increaseCounter}> + </button>
        </div>
    )
}