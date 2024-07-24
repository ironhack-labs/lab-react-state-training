import { useState } from "react"
import './Counter.css'
const Counter = () => {

    const [counter, setCounter] = useState(0)
    const handleCounterDec = () => {
        counter > 0 && setCounter(counter - 1)
    }

    const handleCounterInc = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="Counter">

            <button onClick={handleCounterDec}>-</button>
            <p>{counter}</p>
            <button onClick={handleCounterInc}>+</button>

        </div>
    )
}

export default Counter