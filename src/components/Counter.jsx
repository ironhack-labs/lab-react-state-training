import {useState} from "react"

function Counter() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount (count + 1)
    }

    function decrement() {
        if (count > 0) {
        setCount (count - 1)

        }

    }

    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
        </div> 

    )

}

export default Counter