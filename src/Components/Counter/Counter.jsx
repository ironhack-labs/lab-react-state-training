import './Counter.css'
import { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)

    const handleCounterUp = () => {
        setCounter(counter + 1)
    }

    const handleCounterDown = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }

    }

    return (

        <div className='Counter'>
            <button onClick={handleCounterUp}>+</button>
            <p>{counter}</p>
            <button onClick={handleCounterDown}>-</button>
        </div>
    )

}

export default Counter