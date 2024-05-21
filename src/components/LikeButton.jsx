import React, { useState } from "react";
const LikeButton = () => {
    const [ likes, setLikes ] = useState(0)
    const [ likes2, setLikes2 ] = useState(0)

    const handleLike = () => {
        setLikes(likes + 1)
    }
    const handleLike2 = () => {
        setLikes2(likes2 + 1)
    }



return(
    <div>
        <button onClick={handleLike}>{likes} Likes </button> <button onClick={handleLike2}>{likes2} Likes </button>
    </div>



)
}
export default LikeButton