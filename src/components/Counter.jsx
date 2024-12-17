import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementValue = () => setCounter(counter + 1);
  const decrementValue = () => setCounter(counter - 1);

  return (
    <div className="counter">
      <button onClick={() => counter > 0 && decrementValue()}>-</button>
      <p>{counter}</p>
      <button onClick={incrementValue}>+</button>
    </div>
  );
}

export default Counter;
