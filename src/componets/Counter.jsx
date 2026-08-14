import React, { useState } from "react";
import { requestFormReset } from "react-dom";

function Counter() {
  const [number, setNumber] = useState(0);
  const handleSetNumber = () => {
    setNumber(number + 1);
  };

  const handleNumber2 = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={handleNumber2}> - </button> <p>{number}</p>
      <button onClick={handleSetNumber}> + </button>
    </div>
  );
}

export default Counter;
