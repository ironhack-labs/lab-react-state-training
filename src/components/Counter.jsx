import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
 
  return (
    <div className="Counter">
      <h2>Counter</h2>
 
     <p> { count } </p> 
     <button onClick={() =>{if (count > 0) setCount(count - 1)}}> - </button> 
     <button onClick={() =>setCount(count + 1)}> + </button>
      
    </div>
  );
}
export default Counter