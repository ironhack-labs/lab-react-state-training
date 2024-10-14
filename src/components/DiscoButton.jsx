import React, { useState } from 'react';

function DiscoButton() {
    const [likesCount, setLikesCount] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [colorIndex, setColorIndex] = useState(random());
    const incrementLikes = () => {
        setLikesCount(likesCount +1);
        setColorIndex(random());
    };

    function random() {
        return Math.floor(Math.random() * colors.length);
    }

    return (
        <div >
            <button style={{backgroundColor: colors.at(colorIndex)}} onClick={() => incrementLikes()}>{likesCount} Like</button>
        </div>
    );
}



export default DiscoButton;
