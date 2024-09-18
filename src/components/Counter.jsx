import React, { useState } from 'react';

function Counter() {
  const [count, setCounter] = useState(0);

  const handleAddCounter = () => {
    setCounter(count + 1);
  };

  const handleRemoveCounter = () => {
    if (count > 0) {
      setCounter(count - 1);
    }
  };

  return (
    <div className='counter'>
      {count > 0 ? (
        <>
          <button onClick={handleRemoveCounter}>-</button>
          <h1>{count}</h1>
        </>
      ) : (
        <>
        <button onClick={handleRemoveCounter}>-</button>
        <h1>0</h1>
        </>
      )}
      <button onClick={handleAddCounter}>+</button>
    </div>
  );
}

export default Counter;
