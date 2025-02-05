import { useState } from "react";

export default function DiscoButton() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
        setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    };

    return (
        <button 
            onClick={handleClick} 
            style={{ backgroundColor: colors[colorIndex] }}
        >
            {likes} Likes
        </button>
    );
}
