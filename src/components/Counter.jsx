import { useState } from "react";

function CounterButton() {
  const [Counter, setCounter] = useState(0);

  return (
    <>
      <h2>counter</h2>
      <h3 className="counter">{Counter}</h3>
      <button className="btnc" onClick={() => setCounter(Counter + 1)}>+</button>
      <button className="btnc" onClick={() => {
          if (Counter > 0) {
            setCounter(Counter - 1);
          } }}
      >-</button>
    </>
  );
}

export default CounterButton;
