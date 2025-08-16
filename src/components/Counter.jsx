import {useState} from 'react';

function Counter({initialCount2 = 0}) {
  const [counter2, setCounter2] = useState(initialCount2);
  const [isActiveMinus, setStyleMinus] = useState(false);
  const [isActivePlus, setStylePlus] = useState(false);
  return (
    <div className="counter">
      <button
        className={`button-83 ${isActiveMinus ? 'active' : ''}`}
        onClick={() => {
          counter2 > 0 ? setCounter2(counter2 - 1) : 0;
          setStyleMinus(true);
          setTimeout(() => setStyleMinus(false), 100);
        }}
      >
        <p>-</p>
      </button>

      <div className="counter-number">{counter2}</div>

      <button
        className={`button-83 ${isActivePlus ? 'active' : ''}`}
        onClick={() => {
          setCounter2(counter2 + 1);
          setStylePlus(true);
          setTimeout(() => setStylePlus(false), 100);
        }}
      >
        <p>+</p>
      </button>
    </div>
  );
}

export default Counter;
