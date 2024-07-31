import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const countHandlerPlus = () => {
    setCount(count + 1);
  };

  const countHandlerMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="counter-div">
        <button onClick={countHandlerMinus} className="counter-buttons">
          -
        </button>
        <p>{count}</p>
        <button onClick={countHandlerPlus} className="counter-buttons">
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
