import { useState } from "react"

const LikeButton = () => {

    const [likes, setLikes] = useState(0)

    const handleLikes = () => {
        setLikes(likes + 1)
    }

    return (
        <div className="LikeButton">
            <button onClick={handleLikes}>{likes} Likes</button>
        </div>
    )

}

export default LikeButton