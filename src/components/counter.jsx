import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const subCounter = () => {
    if (counter != 0) setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={subCounter}>-</button>
      <p>{counter}</p>
      <button onClick={addCounter}>+</button>
    </div>
  );
}

export default Counter;
