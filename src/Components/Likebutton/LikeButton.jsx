import './likeButton.css'
import { useState } from 'react'

function LikeButton() {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)


    const handleCounter = () => {
        setCounter(counter + 1)
    }

    const handleCounter2 = () => {
        setCounter2(counter2 + 1)
    }

    return (

        <div className='buttons'>
            <button onClick={handleCounter}>{counter} Likes</button>
            <button onClick={handleCounter2}>{counter2} Likes</button>
        </div>
    )
}

export default LikeButton