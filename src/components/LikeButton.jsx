import { useState } from "react";

function Likebutton(){
    const [likes,setLikes] = useState(0);
    const handleLikeClick = () => {
        setLikes(likes + 1)
    }
    return (
        <button onClick={handleLikeClick}>
            {likes} {"Likes"}
        </button>
    )
}

export default Likebutton