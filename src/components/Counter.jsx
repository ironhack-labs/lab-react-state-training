import { useState } from "react";

function Counter() {
  const [countValue, setCountValue] = useState(0);

  const handleMinusCounter = () => {
    countValue !== 0 ? setCountValue(countValue - 1) : null;
  };

  const handlePlusCounter = () => {
    setCountValue(countValue + 1);
  };

  return (
    <div className="counter">
      <button onClick={handleMinusCounter}>-</button>
      <h3>{countValue}</h3>
      <button onClick={handlePlusCounter}>+</button>
    </div>
  );
}

export default Counter;
