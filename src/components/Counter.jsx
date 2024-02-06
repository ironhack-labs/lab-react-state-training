import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => count > 0 ? setCount(count - 1) : setCount(count)}> - </button>

    </div>
  );
}

export default Counter;