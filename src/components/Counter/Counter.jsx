import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)


    const incremetCounter = () => {
        setCounter(counter + 1)
    }
    const decrementCounter = () => {
        setCounter(counter - 1)
    }


    return (
        <div className="Counter">
            <h3>Exercise 2</h3>
            <hr />
            <div className="Container">
                <button onClick={incremetCounter}> + </button>
                <p>{counter}</p>
                <button onClick={decrementCounter}> - </button>
            </div>
        </div>

    )
}
export default Counter