import { useState } from "react"

import './Counter.css'

function Counter () {
    const [counter , setCounter] =useState(0)
return (
    <>
    <div className="counter-container">
    <button onClick={() => counter > 0 ? setCounter(counter -1): counter}>-</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter +1)}>+</button>
    </div>
    
    </>
)
}

export default Counter