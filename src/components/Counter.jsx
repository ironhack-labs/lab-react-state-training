import { useState } from 'react'

function Counter () {

    const [counter , setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter+1)
    }

    const decreaseCounter = () => {
        if (counter>0) {
            setCounter(counter-1)
        }
        
    }
    return (
        <div className = "counter">
            <button onClick = {decreaseCounter}>-</button>
            {counter}
            <button onClick = {increaseCounter}>+</button>
        </div>
    )
}

export default Counter