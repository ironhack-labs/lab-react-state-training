import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initialize state


  const handleIncrement = () => {
    setCount(count + 1); // Update state on click
  };
  const handleDecrement= () => {
    if(count>0){
        setCount(count -1); // Update state on click
    }
  };

  return (
    <div className="counter">
      <button onClick={handleIncrement}>
        <kbd>+</kbd> 
      </button>
      <p>{count}</p>
      <button onClick={handleDecrement}>
        <kbd>-</kbd> 
      </button>
    </div>
  );
}


export default Counter;
