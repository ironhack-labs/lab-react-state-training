import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  function decrement() {
    setCounter((prevCounter) => (prevCounter === 0 ? 0 : prevCounter - 1));
  }

  return (
    <>
      <div id="counterContainer">
        <button onClick={decrement}>-</button> {counter}{" "}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default Counter;
