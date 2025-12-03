import { useState } from "react";

function DiscoButton() {
    const color = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    function handleClick() {
        setLikes(likes + 1);

        const nextIndex = (colorIndex + 1) % color.length;
        setColorIndex(nextIndex);
    }

    return (
        <button
            onClick={handleClick}
            style={{
                background: color[colorIndex],
                color: "white",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                borderRadius: "5px"
            }}
        >
            {likes} Likes
        </button>
    );

}

export default DiscoButton;