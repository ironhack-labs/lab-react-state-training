import { useState } from "react";

function LikeButton(props) {

    const [likes, setLikes] = useState(0);

    const handleLikes = () => {
        props.onClick();
        setLikes(likes + 1);
    };

    return(
        <button onClick={handleLikes} style={{backgroundColor: props.color}}>{likes} Likes</button>
    );
}

export default LikeButton;