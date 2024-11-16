import { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [counterValue, setCounter] = useState(0)

    const decreaseCounter = () => {

        if(counterValue > 0)

        setCounter(counterValue - 1)

    }

    const increaseCounter = () => {

        setCounter(counterValue + 1)

    }

    return (

        <div className='Counter'>

            <button onClick={decreaseCounter} className="decrease" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                </svg>
            </button>

            <h2> {counterValue} </h2>

            <button onClick={increaseCounter} className="increase" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
            </button>

        </div>


    )
}

export default Counter

