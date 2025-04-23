import { useState } from 'react'

function LikeButton () {

    const [counter , SetCounter] = useState(0)

    const increaseCounter = () => {
        SetCounter(counter+1)
    }

    return (
        <div className='likeButton'>
            <button onClick = {increaseCounter}>{counter} Likes</button>
        </div>
    )
}

export default LikeButton