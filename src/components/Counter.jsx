import React from "react";
import { useState } from "react";

function Counter() {
  const [counterValue, setcounterValue] = useState(0);

  const addButton = () => {
    if (counterValue >= 0) {
      setcounterValue(counterValue + 1);
    }
  };

  const minusButton = () => {
    if (counterValue > 0) {
      setcounterValue(counterValue - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <button style={{ height: "20px" }} onClick={minusButton}>
        -{" "}
      </button>
      <p>{counterValue}</p>
      <button style={{ height: "20px" }} onClick={addButton}>
        +
      </button>
    </div>
  );
}

export default Counter;
