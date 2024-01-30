import React, { useState } from 'react';

function DiscoButton() {
    const [likes, setLikes] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [colorIndex, setColorIndex] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <button 
            onClick={handleLike} 
            style={{ backgroundColor: colors[colorIndex] }}
        >
            {likes} Likes
        </button>
    );
}

export default DiscoButton;
