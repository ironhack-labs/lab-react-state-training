import { useState } from "react";

function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  let handleIncrease = () => {
    setCounterValue(counterValue + 1);
  };

  let handleDecrease = () => {
    setCounterValue(counterValue - 1);
  };
//falta implementar un check para que el counterValue nunca baje de 0. Idea, ¿usar condicional ternario dentro de handleDecrease?
//también falta que cuando clicas a uno de los dos botones cambie de color al clicar
  return (
    <div>
      <h2>Counter</h2>
      <div className="counter">
        <button className="buttonMore" onClick={handleIncrease}>{"+"}</button>
        <p>{`${counterValue}`}</p>
        <button className="buttonLess" onClick={handleDecrease}>{"-"}</button>
      </div>
    </div>
  );
}

export default Counter;
