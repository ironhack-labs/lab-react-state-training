import { useState } from "react"

function Counter() {
    const [counterValue, setCounterValue] = useState(0);

    const increment = () => {setCounterValue(counterValue+1)
    }

    const decrement = () => {
        if(counterValue > 0) {
            setCounterValue(counterValue-1)
    }
}

    return (
        <section>
            <button onClick={decrement}>-</button>
            <p>{counterValue}</p>
            <button onClick={increment}>+</button>
        </section>
    )
}
export default Counter