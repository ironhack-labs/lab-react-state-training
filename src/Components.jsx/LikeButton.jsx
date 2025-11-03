import { useState } from "react";

function LikeButton({ className }) {
    const [likes, setLikes] = useState(0); 
    const whenClicked = () => {
        setLikes(likes + 1);
    };
    
    return (
        <button className={className} onClick={whenClicked}>
            {likes} Likes
        </button>
    );
}

export default LikeButton;


