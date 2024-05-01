import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const decrementCounter = () => {
        setCounter(counter === 0 - 1)
    }

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {counter} times</p>

            <button onClick={decrementCounter}> - </button>
            <button onClick={incrementCounter}> + </button>
        </div>
    )
}

export default Counter