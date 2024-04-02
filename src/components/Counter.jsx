import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> + </button> {count}
      <button onClick={() => (count > 0 ? setCount(count - 1) : 0)}> - </button>
    </div>
  );
};

export default Counter;
