import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const decrementCounter = () => {
        setCounter(counter - 1)
    }

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="Counter">

            <p> <button onClick={decrementCounter}> - </button>
                {counter}
                <button onClick={incrementCounter}> + </button></p>
        </div>
    )
}

export default Counter