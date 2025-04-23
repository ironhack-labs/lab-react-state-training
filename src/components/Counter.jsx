import { useState } from "react"

function Counter () {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        if (count > 0) {
            setCount( count - 1)
          }
    }

    return (
        <div className={count >= 10 ? "counter popular" : "counter"}>
            <button onClick={incrementCount}> + </button>
            <p>{count}</p>
            <button onClick={decrementCount}> - </button>
        </div>
    )
}

export default Counter;