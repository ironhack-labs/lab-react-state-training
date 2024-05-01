import "./counter.css"
import { useState } from "react"

const LikesButton = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const decrementCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="Counter">
            <h2>Counter</h2>
            <div className="button">
                <button onClick={incrementCounter}>  + </button>
                <p> {counter} </p>
                <button onClick={decrementCounter}>  - </button>
            </div>

        </div>
    )
}

export default LikesButton