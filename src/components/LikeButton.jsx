import { useState } from "react";

const LikeButton = () => {
    const [likeCount, setLikeCount] = useState(0);
    console.log(likeCount)
    return (
        <div className='btn-div'>
            <button type="button" onClick={() => {
                setLikeCount(likeCount + 1)
            }
            }> {likeCount} Likes </button>
        </div>
    );
}

export default LikeButton;