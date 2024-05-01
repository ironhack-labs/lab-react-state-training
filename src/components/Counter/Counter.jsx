import { useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <button className="btn-like" type="button" onClick={decreaseCounter}>
                -
            </button>
            {counter}
            <button className="btn-like" type="button" onClick={increaseCounter}>
                +
            </button>
        </div>
    )

}

export default Counter