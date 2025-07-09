import React, { useState } from 'react';

export default function LikesBtn({className}) {
    const [likes, setLikes] = useState(0);

    const plusLikes = () => {
        setLikes(likes + 1);
    };

    return (
        <div className= {className}>
            <button onClick={plusLikes}>{likes} Likes</button>
        </div>
    );
}
