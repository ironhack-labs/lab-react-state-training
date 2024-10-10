import React, { useState } from 'react';

function DiscoButton() {
    const [likeCount, setLikeCount] = useState(0);
    const [activeColor,setActiveColor] = useState("purple")
    const availableColors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const handleButtonClick = () => {
        setLikeCount((prevCount) => ++prevCount);
        setActiveColor(availableColors[Math.round(Math.random()*availableColors.length)]);
    }
    return (
        <button onClick={() => handleButtonClick()} style={{ backgroundColor: activeColor }}>{likeCount} Likes</button>
    )
}
export default DiscoButton