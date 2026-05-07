import { useState } from "react";

function DiscoButton() {
    const [likes, setLikes] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const currentColor = colors[likes % colors.length];

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <button
        onClick={handleClick}
        style={{ backgroundColor: currentColor, color: "white", padding: "8px 16px"}}>{likes} Likes</button>
    );
}

export default DiscoButton;