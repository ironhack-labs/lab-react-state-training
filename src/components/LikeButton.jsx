import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    
    const increaseLikes = () => {
        setLikes(likes + 1);
    } 

    return <div>
        <button onClick ={increaseLikes}>{likes} Likes</button>
    </div>

}

export default LikeButton;