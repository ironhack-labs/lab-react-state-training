import { useState } from "react";

function DiscoButton() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const handleButtonClick = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <button
        onClick={handleButtonClick}
        style={{ backgroundColor: colors[colorIndex],
         color: "white",
         padding: "10px 20px",
         fontSize: "1.2rem",
         cursor: "pointer",
         border: "none",
         borderRadius: "5px",
        }}
       >
        {likes} Likes
       </button>
    );
}

export default DiscoButton