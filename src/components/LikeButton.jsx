import { useState } from "react"


function LikeButton (){

    const [likes, setLikes] = useState(0)

    const likeCounter = () => {
        setLikes(likes +1);
    };

    return (
        <div>
        <button onClick={likeCounter}>{likes} likes</button>
        </div>
    )

}

export default LikeButton