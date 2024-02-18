import { useState } from "react";
function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [likes2, setLikes2] = useState(0);

    return(
        <div className="like-button">
        <button className="likeButton" onClick={() => setLikes(likes + 1)}>{likes} Likes</button>
        <button onClick={() => setLikes2(likes2 + 1)}>{likes2} Likes</button>
        </div>
    );
}

export default LikeButton;