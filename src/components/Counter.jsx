import { useState } from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (diff) => {
    if (diff === '+1') {
      setCounter(counter + 1);
    } else if (diff === '-1') {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
  };
  return (
    <div className="Counter">
      <div>
        <button
          onClick={() => {
            updateCounter('-1');
          }}
          className="btn"
        >
          -
        </button>
        {counter}
        <button
          onClick={() => {
            updateCounter('+1');
          }}
          className="btn"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
