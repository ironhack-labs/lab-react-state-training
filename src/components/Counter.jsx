import { useState } from "react"
import "./Counter.css"

function Counter() {


    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const decremenetCounter = () => {
        setCounter(counter > 0 ? counter - 1 : counter)
    }

    return (
        <div className="container">
            <div className="button" onClick={decremenetCounter}>-</div>
            <p>{counter}</p>
            <div className="button" onClick={incrementCounter}>+</div>
        </div>
    )
}

export default Counter