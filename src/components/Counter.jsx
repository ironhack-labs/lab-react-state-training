import { useState } from "react";

function Counter(){
    const [state, setState] = useState(0);
    return(
        <>
            <button onClick={() => {
                setState(state + 1)
            }}>+</button>
            <p>{state}</p>
            <button onClick={() => {
                setState(state -1)
            }}>-</button>
        </>
    )
}

export default Counter;