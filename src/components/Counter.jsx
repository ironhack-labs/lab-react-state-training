import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}> increment </button>
      <span> {count} </span>
      <button onClick={handleDecrement}> decrement </button>
    </div>
  );
}
