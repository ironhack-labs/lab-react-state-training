import { useState } from "react";


function Counter (props) {
    const [count, setCount] = useState(0);
    

    return (
        <section className="section">

            <button id="button3" onClick={()=>setCount(count + 1)}>+</button> 
            <p id="count2" >{count}</p>
            <button id="button4" onClick={()=>count>0? setCount (count - 1) : setCount(0) }>-</button>
            
        </section>
    )
}












export default Counter;

