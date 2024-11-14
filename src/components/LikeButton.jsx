import { useState } from "react"

export default function LikeButton() {
    const [like, setLike] = useState(0)
    return (

        <div className="like-button">
            <button onClick={() => {setLike(like + 1)}}>{like} Likes</button>
        </div>

    )
}