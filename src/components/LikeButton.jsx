import { useState } from "react";

function LikeButton() {
    const [like, setLike] = useState(0);


    return (
        <div className = "likeButton">
          <button onClick={() => setLike(like + 1)} className = "button">
            {like} Likes
            </button>  
        </div>
    );
}

export default LikeButton;