import { useState } from "react";
import Panel from "../ui/panel/panel";

function Counter({ className = '', min = 0 }) {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  };
  const handleCountDown = () => {
    if (min === undefined || count > min) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Panel className={`d-flex gap-2 justify-content-center align-items-center ${className}`}>
        <button className={`btn btn-primary`} onClick={handleCountDown}>-</button>
        <p className={`m-0 fs-2 fw-lighter text-center`}>{count}</p>
        <button className={`btn btn-primary`} onClick={handleCountUp}>+</button>
      </Panel>
    </>
  );
}

export default Counter;
