import { useState } from "react";

function LikeButton({className = "", onClick = () => {}}) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        onClick();
        setLikes(likes + 1);
    }

    return <button className={` ${className}`} onClick={handleLike}>{likes} Likes</button>;
}

export default LikeButton;