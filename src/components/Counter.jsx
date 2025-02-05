import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (val) => {
    const newValue = counter + val;
    if (newValue >= 0) {
      setCounter(newValue);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          updateCounter(-1);
        }}
      >
        -
      </button>
      {counter}
      <button
        onClick={() => {
          updateCounter(+1);
        }}
      >
        +
      </button>
    </div>
  );
}
export default Counter;
