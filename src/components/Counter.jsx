import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <section className="counter">
        
      <button className="btn" onClick={increaseCounter}>+</button> {counter} <button className="btn" onClick={decreaseCounter}>-</button>
    </section>
  );
}
export default Counter;
