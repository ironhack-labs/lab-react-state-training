import './Counter.css'
import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const HandleCounterUp = () => {
        setCounter(counter + 1)
    }

    const handleCounterDown = () => {

        if (counter === 0) {
            return
        }

        setCounter(counter - 1)
    }

    return (
        <div className="Counter">
            <button onClick={handleCounterDown}>-</button>
            <p>{counter}</p>
            <button onClick={HandleCounterUp}>+</button>
        </div>
    )
}

export default Counter