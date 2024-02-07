import { useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(0);

    return (
        <div>
            <button onClick={() => setLikes(likes + 1)} >{likes} likes</button>
            <button onClick={() => setLiked(liked + 1)} >{liked} likes </button>
        </div>
    );
}

export default LikeButton;