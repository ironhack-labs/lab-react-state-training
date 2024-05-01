import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <section>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <h3>{count}</h3>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </section>
    </div>
  );
}
export default Counter;
