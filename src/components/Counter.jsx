import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button className="-" onClick={decrementCounter}>
        -
      </button>
      {counter}
      <button className="+" onClick={incrementCounter}>
        +
      </button>
    </>
  );
}
export default Counter;
