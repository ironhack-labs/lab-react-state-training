import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="LikeButton">
      <h2>Button</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}
export default Counter;
