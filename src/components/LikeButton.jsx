import { useState } from "react"

export function LikeButton () {
    const [like, setLike] = useState(0);
    
    const giveLike = () => {
        setLike(like + 1)
    }

    return <button onClick={giveLike}>{like} Likes</button>
}