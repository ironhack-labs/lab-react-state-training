import { useState } from "react";

export function Counter () {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
      setCount(count - 1);
    };
    
     return (
       <>
         <div>
           <button onClick={minus}>-</button>
           <span>{count}</span>
           <button onClick={plus}>+</button>
         </div>
       </>
     );
}
