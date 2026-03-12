import { useState } from "react";


function LikeButton () {
    const [likeCount, setLikeCount] = useState(0);

    const increaseLikeCount = () => {
        setLikeCount(likeCount + 1);
    }

    return (
        <button onClick={increaseLikeCount} >{likeCount} Likes</button>
    )
}

export default LikeButton