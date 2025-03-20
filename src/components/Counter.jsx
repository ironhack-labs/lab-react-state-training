import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  return (
    <div className='counter'>
      <button onClick={handleDecrement} className='counter-button'>-</button>     
        <p>{count}</p>
      <button onClick={handleIncrement} className='counter-button'>+</button>
    </div>
  );
}
