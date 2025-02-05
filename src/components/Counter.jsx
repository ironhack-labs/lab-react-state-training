
import { useState } from 'react'
import './Counter.css'

export default function Counter() {
     const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)}> + </button>
        <p>{count}</p>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}> - </button>
      </div>
    </div>
  );
}


