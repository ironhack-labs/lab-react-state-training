import { useState, useSyncExternalStore } from "react"
import './../Counter/Counter.css'

function Counter() {

    const [counter, setCounter] = useState(0)



    const handleCounterUp = () => {
        setCounter(counter + 1)
    }

    const handleCounterDown = () => {
        if (counter === 0) {
            return
        }
        setCounter(counter - 1)


    }

    return (
        <div className="Counter">
            <button onClick={handleCounterDown}> - </button>
            {counter}
            <button onClick={handleCounterUp}> + </button>
        </div>
    )
}

export default Counter