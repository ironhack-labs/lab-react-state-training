import React, { useState } from 'react';

function LikeButton() {
    const [likesCount, setLikesCount] = useState(0);
    const incrementLikes = () => setLikesCount(likesCount +1);

    return (
        <div>
            <button onClick={() => incrementLikes()}>{likesCount} Like</button>
        </div>
    );
}

export default LikeButton;
