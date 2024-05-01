import { useState } from "react"
import "./Counter2.css"

const Counter2 = () => {

    const [counter, setCounter] = useState(0)

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }

    }

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="Counter2">
            <h2>Counter 2  </h2>

            <button onClick={incrementCounter}> + </button>
            <p> {counter} </p>
            <button onClick={decrementCounter}> - </button>


        </div>
    )
}

export default Counter2