import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <hr></hr>
      <button onClick={() => setCounter(counter + 1)}>+ </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>- </button>
    </>
  );
}
export default Counter;
