import { useState } from "react";

function Counter (props) {

    const [count,setCount] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <div id="counter">
                <button onClick={()=> count >0 ? setCount(count -1) : setCount(0)}>-</button>
                <p>{count}</p>
                <button onClick={()=>setCount(count +1)}>+</button>
            </div>
        </div>
    )
}

export default Counter