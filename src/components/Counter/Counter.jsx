import { useState } from "react"
import './Counter.css'


function Counter() {

    const [count, setCounter] = useState(0)

    const handleCounterUp = () => {
        setCounter(count + 1)
    }

    const handleCounterDown = () => {
        if (count === 0) {
            return
        }
        setCounter(count - 1)
    }

    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {count} times</p>
            <div className="Buttons">
                <button onClick={handleCounterDown}> - </button>
                <button onClick={handleCounterUp}> + </button>
            </div>

        </div>
    )
}

export default Counter