
import "./IncDecCounter.css"
import { useState } from "react"

const IncDecCounter = () => {

    const [counter, updateCounter] = useState(0)

    const updateCtrFunc = (operation) => {
        if (operation === '+dif') {
            updateCounter(counter + 1)  
        } else if (operation === '-dif') {

            if (counter > 0) {
                updateCounter(counter - 1)
            }
        }
    }

    return (
        <div className="counter">
            <h1>Counter</h1>
            <button className="inc-btn" onClick={() => {
                updateCtrFunc('+dif')
            }}> + </button>

            <span>{counter}</span>

            <button className="dec-btn" onClick={() => {
                updateCtrFunc('-dif')
            }}> - </button>
        </div>
    )
}


export default IncDecCounter
