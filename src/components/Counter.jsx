import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button onClick={decreaseCounter}>-</button>
      {counter}
      <button onClick={increaseCounter}>+</button>
    </>
  );
}

export default Counter;
