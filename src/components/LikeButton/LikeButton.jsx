import { useState } from 'react'
import './LikeButton.css'

const Button = () => {

    const [likesCounter, setLikesCounter] = useState(0)

    const handleCounter = () => {
        setLikesCounter(likesCounter + 1)
    }

    const [likesCounter2, setLikesCounter2] = useState(0)

    const handleCounter2 = () => {
        setLikesCounter2(likesCounter2 + 1)
    }

    return (
        <div className="Button">
            <button onClick={handleCounter}>{likesCounter} Likes</button>
            <button onClick={handleCounter2}>{likesCounter2} Likes</button>
        </div>

    )
}

export default Button