import React, { useState } from "react";

export default function DiscoButton() {
    
    const [likes, setLikes] = useState(0);
    const [color, setColor] = useState("purple");

    
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

   
    const handleClick = () => {
       
        setLikes(likes + 1);

       
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        
        setColor(randomColor);
    };

    return (
        <button onClick={handleClick} style={{ backgroundColor: color, padding: "10px 20px", color: "white", border: "none", cursor: "pointer" }} >
            {likes} Likes
        </button>
    );
}