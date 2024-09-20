import { useState } from "react";

function Counter() {

  const [counter, setCount] = useState(0)
  // const [countResta, setCountResta] = useState(0);

  const handleSuma = () => {
    setCount(counter + 1);
  };
  const handleResta = () => {
    if(counter > 0 ) {
      setCount(counter - 1);
    }
  };

  return (
    <div id="counter">
      <button onClick={handleSuma}>+</button>
      <h1>{counter}</h1>
      <button onClick={handleResta}>-</button>
    </div>
  )
}

export default Counter