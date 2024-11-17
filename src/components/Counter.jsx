import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const min = 0;

  //const handleCountDown = () => setCount(count - 1);
  const handleCountDown = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  const handleCountUp = () => setCount(count + 1);

  return (
    <div className="m-3 border border-primary w-25 text-center">
      <button className="btn btn-primary m-2" onClick={handleCountDown}>
        -
      </button>
      {count}
      <button className="btn btn-primary m-2" onClick={handleCountUp}>
        +
      </button>
    </div>
  );
}

export default Counter;
