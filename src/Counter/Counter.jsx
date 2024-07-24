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
        <div className="Counter">
            <h1>Likes {counter}</h1>

            <button onClick={handleCounterInc}>Increase</button>
            <button onClick={handleCounterDec}>Decrease</button>

        </div>

    )
}

export default Counter