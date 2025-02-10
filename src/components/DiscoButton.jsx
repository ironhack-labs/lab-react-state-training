import { useState } from "react";
import LikeButton from "./LikeButton";

function DiscoButton() {
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const colors = [
        "rgba(128, 0, 128, 0.5)",  // Purple con 50% transparencia
        "rgba(0, 0, 255, 0.5)",    // Blue con 50% transparencia
        "rgba(0, 128, 0, 0.5)",    // Green con 50% transparencia
        "rgba(255, 255, 0, 0.5)",  // Yellow con 50% transparencia
        "rgba(255, 165, 0, 0.5)",  // Orange con 50% transparencia
        "rgba(255, 0, 0, 0.5)"     // Red con 50% transparencia
    ];
    const handleClick = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex +1) % colors.length);
    };

    return (
        <>
        <p>Iteration 5 - DiscoButton</p>
        <button
        className="disco-button"
        onClick={handleClick}
        style={{ backgroundColor: colors[colorIndex] }}>
            {likes} likes 🪩
        </button>
        </>
    );
}

export default DiscoButton;