import React, { useState } from "react";

function Counter() {
  // states
  const [counterValue, setCounterValue] = useState(0);

  //functions
  function handleButtonPlus() {
    return setCounterValue(counterValue + 1);
  }

  function handleButtonMinus() {
    if (counterValue <= 0) {
      return;
    }
    return setCounterValue(counterValue - 1);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems:"center", gap: "8px", height: "24px"}}>
      <button onClick={handleButtonMinus}>-</button>

      <p>{counterValue}</p>

      <button onClick={handleButtonPlus}>+</button>
    </div>
  );
}

export default Counter;
