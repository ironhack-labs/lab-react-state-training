import { useState } from 'react'

import "./LikeButton.css"

const LikeButton = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const handleCounter1 = () => {
        setCount1(count1 + 1)
    }

    const handleCounter2 = () => {
        setCount2(count2 + 1)
    }


    return (
        <div className="LikeButton">
            <button onClick={handleCounter1}>{count1} Likes</button>
            <button onClick={handleCounter2}>{count2} Likes</button>
        </div>
    )
}

export default LikeButton