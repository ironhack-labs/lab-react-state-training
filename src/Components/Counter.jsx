import "./Counter.css"
import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleCounterInc = () => {
        setCounter(counter + 1)
    }

    const handleCounterDec = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }

    }

    return (
        <dir>
            <p>aqui esta el counter</p>
            <button onClick={handleCounterInc}>+</button>
            
            {counter}

            <button onClick={handleCounterDec}>-</button>
        </dir>
    )
}
export default Counter