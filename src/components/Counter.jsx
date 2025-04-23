import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const valueController = (value) => {
    if (value === "+") {
      setCount(count + 1);
    }
    if (value === "-" && count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button onClick={() => valueController("-")}>-</button>
      <span>{count}</span>
      <button onClick={() => valueController("+")}>+</button>
    </div>
  );
};
export default Counter;
