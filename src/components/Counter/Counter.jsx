import './Counter.css'
import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleCounterInc = () => {
        setCounter(counter + 1)
    }

    const handleCounterDec = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className='Counter'>
            <button onClick={handleCounterInc}>Increase</button><br />
            {counter}
            <br />
            <button onClick={handleCounterDec}>Decrease</button>
        </div>
    )
}

export default Counter