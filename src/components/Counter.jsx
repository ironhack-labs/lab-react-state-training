import React from 'react';
import { useState } from 'react';

export default function Counter() {
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
        <div id="main-content">
          <section>
            <p>Number of likes: {counter}</p>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
          </section>
        </div>
      </div>
    );
}
