import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h2>Counter</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: '0 1rem' }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
