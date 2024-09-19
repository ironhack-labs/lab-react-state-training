import React from "react";
import { useState } from "react";

function LikeButton() {

    const [likes, setLikes] = useState(0);

    const handleLikes = () => {
       
        setLikes(likes + 1);
    };

    return(
        <button onClick={handleLikes}>{likes} Likes</button>
    );
}
export default LikeButton;
