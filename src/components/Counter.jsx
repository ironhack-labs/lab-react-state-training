import { useState } from "react";

function Counter () {

    const [counter, setCounter] = useState(0)
    
    const increment = () => setCounter(counter + 1)
    const decrement = () => {
        if(counter>0){
            setCounter(counter - 1)
        }
    }
    
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )


}

export default Counter;