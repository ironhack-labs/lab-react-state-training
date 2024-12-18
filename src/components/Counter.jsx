import { useState } from "react";

function counter(){
    const [counter, setCounter] = useState(0); 
    return (<div className="counter-styles">
        <button onClick={()=>setCounter(counter-1)}>-</button>
            {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
        </div>)
}
export default counter