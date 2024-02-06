import { useState } from "react";
import "./counter.css"

function Counter(){

    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <button className="btn" onClick={()=>setCount(count +1)}>+</button>
            <p>{count}</p>
            <button className="btn" onClick={()=>count>0 ? setCount(count-1) : setCount(0)}>-</button>
        </div>
    )
}

export default Counter;