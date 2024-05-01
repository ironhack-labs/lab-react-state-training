import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          decreaseCounter();
        }}
      >
        -
      </button>
      {counter}
      <button
        onClick={() => {
          increaseCounter();
        }}
      >
        +
      </button>
    </div>
  );
}
export default Counter;
