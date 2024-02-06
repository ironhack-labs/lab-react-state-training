import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
        <p> -----2nd iteration-----</p>
      <button onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}>-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Counter;