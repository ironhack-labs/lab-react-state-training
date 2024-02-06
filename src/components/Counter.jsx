import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function updateCouner(change) {
    const newCount = counter + change;
    if (newCount >= 0) {
      setCounter(newCount);
    }
  }

  return (
    <>
      <button
        onClick={() => {
          updateCouner(+1);
        }}
      >
        +
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          updateCouner(-1);
        }}
      >
        -
      </button>
    </>
  );
}
