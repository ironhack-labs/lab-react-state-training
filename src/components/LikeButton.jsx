import { useState } from "react";

function LikeButton(){
    const [likes, setLikes] = useState(0)

    function buttonClicked(){
        setLikes(likes + 1);
    }

    return (
        <button onClick = {buttonClicked}>
            {likes} Likes
        </button>
    );
}

export default LikeButton;