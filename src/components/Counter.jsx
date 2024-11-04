import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleSub = () => {
    setCounter((prev) => prev - 1);
  };
  const handleAdd = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleSub}>-</button>
      {counter}
      <button onClick={handleAdd}>+</button>
    </div>
  );
};
