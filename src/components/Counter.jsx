import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setNum(num + 1)}>+</button>
      <p>{num}</p>
      <button onClick={() => {
        if (num >0) setNum(num - 1)}}>-</button>
    </div>
  );
};

export default Counter;
