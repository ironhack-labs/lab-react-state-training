import { useState } from "react"

function LikeButton() {

    const [likeCount, setLikeCount] = useState(0)


    const addLike = () => {
        setLikeCount(likeCount+1)
    }


    return <button onClick={addLike}>{likeCount} Likes</button>
}

export default LikeButton