import { useState } from "react";

function LikeButton() {

    const [likes, setLikes] = useState(0);
    const increaseLikes = () => {
        setLikes(likes + 1);
    };

    return (
        <button onClick={increaseLikes}>Likes {likes}</button>

    )

}

export default LikeButton;