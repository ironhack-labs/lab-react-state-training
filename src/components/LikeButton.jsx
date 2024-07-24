import { useState } from "react"

const LikeButton = () => {

    const [countLike, setcountLike] = useState(0)

    const countLikeInc = () => {
        setcountLike(countLike + 1)
    }
    return (
        <div>
            <button onClick={countLikeInc}>{countLike} Likes</button>
        </div>
    )
}

export default LikeButton