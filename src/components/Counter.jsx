import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>
        Iteration 2 ============= <br />
      </h2>
      <button onClick={() => setCount(count > 0 ? count - 1 : count)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
