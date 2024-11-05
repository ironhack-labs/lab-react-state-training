import { useState } from 'react';

const LikeButton = () => {

    const [likes, setLikes] = useState(0)
    const handleLike = () => {
        setLikes(likes + 1)


    }

    return (

        <button onClick={handleLike}>
            {likes} {likes === 1 ? "like" : "likes"}
        </button>

    )
}

export default LikeButton