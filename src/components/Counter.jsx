import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
<>
    <div id="counter-wrapper">
        <button className="counter-button" onClick={()=>{setCount(count + 1)}} >+</button>
        <p>{count < 0 ? 0 : count}</p>
        <button className="counter-button" onClick={()=>{setCount(count - 1)}} >-</button>
    </div>  
    </>
        );
        
}

export default Counter;