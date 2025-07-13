import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <button onClick={decrement} className="bg-red-500 text-white px-3 py-1 rounded">-</button>
      <span className="text-xl font-bold">{count}</span>
      <button onClick={increment} className="bg-green-500 text-white px-3 py-1 rounded">+</button>
    </div>
  );
}

export default Counter;
