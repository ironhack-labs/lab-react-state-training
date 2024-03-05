import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button class="plusMinus" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <div>{counter}</div>
      <button class="plusMinus" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </>
  );
};
