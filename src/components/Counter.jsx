import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);
    const counterUpdate = (diff)=>{
        setCounter(Math.max(0, (counter+diff)));
    } 
    return(
        <div>
            <button onClick={()=>counterUpdate(-1)}>-</button>
            {counter}
            <button onClick={()=>counterUpdate(+1)}>+</button>
        </div>
    )
}