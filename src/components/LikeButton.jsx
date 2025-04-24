import React, { useState } from 'react';

export default function LikeButton() {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const incrementLikes = () => {
        setLikes(likes + 1)
    }

    const incrementDislikes = () => {
        setDislikes(dislikes + 1)
    }


    return (
        <div>
            <button onClick={incrementLikes}>{likes} Likes👍</button>
            <button onClick={incrementDislikes}>{dislikes} Dislikes👎</button>
        </div>
    )
}