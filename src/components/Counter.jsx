import { useState } from "react"
import "../App.css"

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const reduceCounter = () => {
        setCounter(counter - 1)
    }
    return (
        <div className="counterButton">
            <button onClick={increaseCounter} className="buttonCounterInc">+</button>
            <p>{counter}</p>
            <button onClick={reduceCounter} className="buttonCounterRed">-</button>
        </div>
    )
}

export default Counter