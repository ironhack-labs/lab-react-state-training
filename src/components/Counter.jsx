import { useState } from "react"
import './Counter.css'


function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="counter">
            <button onClick={() => { if(counter > 0){setCounter(counter - 1)} }}>-</button>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}

export default Counter;