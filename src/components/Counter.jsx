import { useState } from "react";

function Counter() {
  const styleButtons = {
    height: "50px",
    width: "50px",
    margin: "5px",
    backgroundColor: "pink",
  };

  const styleDiv = {
    display: "flex",
    justifyContent: "space-evenly",
    border: "2px solid blue",
    width: "200px",
    fontSize: "50px",
    padding: "10px",
    textAlign: "center"
  };

  const [counterValue, setCounterValue] = useState(0);

  const handleButton = (button) => {
    if (button === 1 && counterValue > 0){
        setCounterValue(counterValue-1);
    }
    if (button ===2){
        setCounterValue (counterValue+1);
    }
  }

  return (
    <div style={styleDiv}>
      <button onClick={() => handleButton(1)} style={styleButtons}>-</button>
      <div>{counterValue}</div>
      <button onClick={() => handleButton(2)} style={styleButtons}>+</button>
    </div>
  );
}

export default Counter;
