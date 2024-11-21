import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
  
 
    const increment = () => setCount((prevCount) => prevCount + 1);
  
    
    const decrement = () => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    );
  }
  
  export default Counter;