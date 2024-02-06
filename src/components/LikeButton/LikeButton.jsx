import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counter, setCounter] = useState(0)

    const handleCounterUp = () => {
        setCounter(counter + 1)
    }


    return (

        <div className='counter'>

            <button onClick={handleCounterUp}>{counter} likes </button>
            <button onClick={handleCounterUp}>{counter} likes </button>

        </div>

    )
}



export default LikeButton

// function Counter() {

//     const [counter, setCounter] = useState(0)

//     const handleCounterUp = () => {
//         setCounter(counter + 1)
//     }

//     const handleCounterDown = () => {
//         setCounter(counter - 1)
//     }

//     return (
//         <div className="Counter">
//             <h2>Counter</h2>

//             <p>You clicked {counter} times</p>

//             <button onClick={handleCounterDown}> - </button>
//             <button onClick={handleCounterUp}> + </button>
//         </div>
//     )
// }