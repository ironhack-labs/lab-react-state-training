import { useState } from "react"


const Counter = () => {


    const [counter, setCounter] = useState(0)

    const decrementCounter = () => {

        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const incrementCounter = () => {
        setCounter(counter + 1)
    }


    return (
        <div className="CounterButtons">

            <h2>My Counter</h2>
            <button onClick={decrementCounter}> - </button>
            <p>{counter}</p>
            <button onClick={incrementCounter}> + </button>

        </div>

    )
}

export default Counter