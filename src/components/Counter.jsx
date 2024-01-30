import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </button>
      {counter}
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button>
    </div>
  );
}
