import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center border rounded p-3">
      <button
        className="btn btn-primary mx-2"
        onClick={decrement}
        style={{ width: '50px', height: '50px', fontSize: '24px' }}
      >
        -
      </button>
      <span className="mx-3" style={{ fontSize: '24px' }}>{count}</span>
      <button
        className="btn btn-primary mx-2"
        onClick={increment}
        style={{ width: '50px', height: '50px', fontSize: '24px' }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
