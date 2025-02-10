import { useState } from "react";

function LikeButton () {
    const [likes, setLikes] = useState(0);
    
    return (
        <>
        <p>Iteration 1 - LikeButton</p>
        <button className="like-button" onClick={() => setLikes(likes + 1)}>
            {likes} likes ❤️
        </button>
        </>
    );
    
}

export default LikeButton;