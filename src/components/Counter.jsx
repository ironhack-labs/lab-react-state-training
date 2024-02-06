import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    return(
        <div className="counter">
        <button onClick = {()=>setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick = {()=> count>0 ? setCount(count - 1): setCount(0)}>-</button>
        </div>
    )
}

export default Counter;