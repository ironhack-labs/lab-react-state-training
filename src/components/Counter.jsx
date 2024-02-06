import { useState } from "react";

function Counter (props){
    const [count, setCount] = useState(0);

    return(
        <div style={{display: "flex"}}>
            <button onClick={()=> setCount(count+1)}>+</button>
            <p>{count}</p>
            <button onClick={()=> count>0 ? setCount(count-1): setCount(0)}>-</button>
        </div>
    )
}

export default Counter