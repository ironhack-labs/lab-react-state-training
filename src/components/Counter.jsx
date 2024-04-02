import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((calculate) => calculate + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter((calculate) => calculate - 1);
    }
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}

export default Counter;
