import React, { useState } from "react";

const Counter = () =>{
    const [counter, setCounter] = useState(0)

    const addCounter = () =>{
        setCounter(counter + 1)
    }

    const extractCounter = () =>{
        setCounter(counter - 1)
    }

    return(
        <div className="counter">
            <button onClick={addCounter}>+</button><p>{counter}</p><button onClick={extractCounter}>-</button>
        </div>
    )
}
export default Counter