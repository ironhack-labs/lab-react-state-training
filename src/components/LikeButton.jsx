import { useState } from 'react'

export const LikeButton = () => {

    const [likeCounter, setLikeCounter] = useState(0)

    const likeIncrease = () => {
        setLikeCounter(likeCounter +1)
    }
    return(
        <div id="like-button-component">
            <button onClick={likeIncrease}>{likeCounter} Likes</button>
        </div>
    )
}