import { useState } from 'react';
import "../App.css";

const DiscoButton = () => {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <button 
            onClick={handleClick} 
            style={{ backgroundColor: colors[colorIndex] }}
            className='disco-button'
        >
            {likes} Likes
        </button>
    );
}

export default DiscoButton;