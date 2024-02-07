import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => (counter <= 0 ? null : setCounter(counter - 1))}>
        {" "}
        -{" "}
      </button>{" "}
      {counter} <button onClick={() => (setCounter(counter + 1))}> + </button>
    </>
  );
}
export default Counter;
