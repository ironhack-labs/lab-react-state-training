import React from 'react';
import { useState } from 'react';

export default function Button() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div id="main-content">
        <section>
          <p>Number of likes: {counter}</p>
          <button onClick={incrementCounter}>Increase counter</button>
        </section>
      </div>
    </div>
  );
}
