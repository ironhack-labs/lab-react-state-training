import{ useState } from 'react';
import './counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter-container">
      <button onClick={decrement} className="counter-button.decrement">
        -
      </button>
      <span className="counter-value">{counter}</span>
      <button onClick={increment} className="counter-button.increment">
        +
      </button>
    </div>
  );
};

export default Counter;
