import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
        <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
        <p> {count} </p>
        <button className="increment" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}