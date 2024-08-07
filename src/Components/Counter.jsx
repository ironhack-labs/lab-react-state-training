import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  const decCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={incCounter}>+</button>
      <p>Counter: {counter}</p>
      <button onClick={decCounter}>-</button>
    </div>
  );
}
