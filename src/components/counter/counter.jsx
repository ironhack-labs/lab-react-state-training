import { useState } from "react"
import "./counter.css"

function Counter () {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(Math.max(counter - 1, 0))
    }

    return <div className="counter">
        <button className="button" onClick={handleDecrement}> - </button>
        <p> {counter} </p>
        <button className="button" onClick={handleIncrement}> + </button>
    </div>
}

export default Counter