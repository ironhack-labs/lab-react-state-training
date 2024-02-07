import { useState } from "react";


function Counter () {
        const [count, setCount] = useState(0);
       
        return (
          <div className="Counter">
         <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button> 
            <p>{count} </p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>
          </div>
        );
      }
       
      export default Counter;
