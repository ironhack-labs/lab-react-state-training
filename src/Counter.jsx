import { useState } from "react";

function Counter() {
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    gap: "20px",
    border: "1px solid blue",
    width: "140px",
  };
  const [value, setValue] = useState(0);
  const handleBtnIncreaseDecrease = (typeOfBtn) => {
    if (typeOfBtn === "decrease" && value > 0) {
      setValue(value - 1);
    } else if (typeOfBtn === "increase") {
      setValue(value + 1);
    }
  };

  return (
    <div style={divStyle}>
      <button onClick={() => handleBtnIncreaseDecrease("decrease")}>-</button>
      <p style={{ color: "white" }}>{value}</p>
      <button onClick={() => handleBtnIncreaseDecrease("increase")}>+</button>
    </div>
  );
}

export default Counter;
