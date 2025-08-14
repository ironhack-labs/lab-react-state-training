import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="Counter">
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
