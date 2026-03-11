import { useState } from "react"
import './Counter.css'

function Counter () {

    const [counter, setCounter] = useState(0)

    const upgradeCounter = (diff) => {
        let newVal = counter + diff
        if(newVal >= 0) setCounter(newVal)
    }

    return (
        <div id="counter-container">
            <button onClick={() => {upgradeCounter(+1)}}>+</button>
            <h2>{counter}</h2>
            <button onClick={() => {upgradeCounter(-1)}}>-</button>
        </div>
    )
}

export default Counter