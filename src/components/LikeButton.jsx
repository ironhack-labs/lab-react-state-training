
import { useState } from 'react'

const LikeButton = () => {

    const [likes, setLike] = useState(0)

    const handleLikes = () => {
        setLike(likes + 1)
    }

    return (
        <div className="LikeButton">
            <button onClick={handleLikes}>
                {likes === 1 ? `${likes} Like` : `${likes} Likes`}
            </button>

        </div>
    )
}

export default LikeButton