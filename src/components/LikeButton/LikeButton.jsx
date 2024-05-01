import { useState } from "react"
import './LikeButton.css'

const LikeButton = () => {
    const [counter, setCounter] = useState(0)
    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className='LikeButton'>
            <h1>Like Button</h1>
            <button onClick={incrementCounter}>{counter} Likes</button>
            <button onClick={incrementCounter}>{counter} Likes</button>
        </div>
    )
}

export default LikeButton