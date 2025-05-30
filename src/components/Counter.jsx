import { useState } from "react";

function Counter({ initialCount = 0 }) {
  
  const [count, setCount] = useState(initialCount);
  
  const handleCountUp = () => setCount(count + 1)
  const handleCountDown = () => {
   if (count > 0) {
     setCount(count - 1);
    } else {
      setCount(0);
    }
   }

  return (
    <div className="border bg-secondary-subtle rounded d-flex d-inline-flex justify-content-center gap-3 mt-2 p-3">
      <button className="btn btn-primary" onClick={handleCountDown}><i className="fa fa-minus"></i></button>
        <span className="fs-3">{count}</span>
      <button className="btn btn-primary" onClick={handleCountUp}><i className="fa fa-plus"></i></button>
    </div>
  );
}

export default Counter;