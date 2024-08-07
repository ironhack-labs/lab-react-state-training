import { useState } from "react";

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
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;