import { useState } from "react";

function Counter() {
  let [counter, changeCounter] = useState(0);
  let increaseCounter = () => {
    changeCounter(counter + 1);
  };
  let decreaseCounter = () => {
    if (counter <= 0) {
      counter = 0;
    } else {
      changeCounter(counter - 1);
    }
  };

  return (
    <section>
      <button onClick={decreaseCounter}> - </button>
      <p>{counter}</p>
      <button onClick={increaseCounter}> + </button>
    </section>
  );
}

export default Counter;
