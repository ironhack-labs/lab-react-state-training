import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddCount = () => setCount(count + 1);  
  const handleSubstractCount = () => (count > 0) && setCount(count - 1);
  
  return (
    <div className="counter-container">
      <button className="counter-btn" onClick={handleSubstractCount}>-</button>
      <p>{count}</p>
      <button className="counter-btn" onClick={handleAddCount}>+</button>
    </div>
  )
}
export default Counter