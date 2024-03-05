import { useState } from "react";

const Counter = () => {
  const counterStyle = {
    width: "500px",
    height: "500px",
  };
  const [count, setCount] = useState(0);
  return (
    <div id="counter">
      <div style={counterStyle}>
        <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
