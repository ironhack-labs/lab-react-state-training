import { useState } from "react";

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    return ( 
        <button className="like-button" onClick={() => setLikes(likes + 1)}>{likes}</button>
     );
}
 
export default LikeButton;