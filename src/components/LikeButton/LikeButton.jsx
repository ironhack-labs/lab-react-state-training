import { useState } from 'react'
import './../LikeButton/LikeButton.css'


const LikeButton = () => {

    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="CounterLikes">

            <button onClick={handleCounter}> {counter} Like</button>
        </div>
    )
}

export default LikeButton