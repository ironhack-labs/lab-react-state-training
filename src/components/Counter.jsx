import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="btn" style={{ display: 'flex' }}>
      <button
        onClick={handleDecrement}
        style={{
          padding: '3px 8px',
          fontSize: '20px',
          margin: '8px',
          background: 'blue',
          color: 'white',
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={handleIncrement}
        style={{
          padding: '3px 10px',
          fontSize: '20px',
          margin: '8px',
          background: 'blue',
          color: 'white',
        }}
      >
        +
      </button>
    </div>
  );
}
export default Counter;
