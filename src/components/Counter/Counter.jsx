import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleCounterInc = () => {
        setCounter(counter + 1)
    }

    const handleCounterDec = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="Counter">
            <button onClick={handleCounterInc}> + </button>
            <h1> {counter}</h1>
            <button onClick={handleCounterDec}> - </button>
        </div>)
}

export default Counter