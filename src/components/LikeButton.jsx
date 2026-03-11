import { useState } from "react"

function LikeButton(){

    const [likeCounterOne, setLikeCounterOne] = useState(0)
    const [likeCounterTwo, setLikeCounterTwo] = useState(0)

    const incrementLikeCounterOne = () => {
        setLikeCounterOne(likeCounterOne + 1)
    }

     const incrementLikeCounterTwo = () => {
        setLikeCounterTwo(likeCounterTwo + 1)
    }

    return (
        <div>
            <button onClick={incrementLikeCounterOne}>{likeCounterOne} LIKES</button>
            <button onClick={incrementLikeCounterTwo}>{likeCounterTwo} LIKES</button>
        </div>
    )
}

export default LikeButton