import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="Counter">
            <h2>Counter 1</h2>

            <button onClick={incrementCounter}> {counter} Likes  </button>
        </div>
    )
}

export default Counter