import React, { useState } from 'react';

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("purple");
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLikes = () => {
    setLikes(likes + 1);
    const randomIndex = Math.floor(Math.random() * colors.length);  
    setColor(colors[randomIndex]); 
  };

  return (
    <div>
      <button 
        onClick={handleLikes} 
        style={{ backgroundColor: color, color: "white", padding: "10px 20px", border: "none", cursor: "pointer" }}
      >
        {likes} Likes
      </button>
    </div>
  );
}

export default DiscoButton;
