import React, { useState } from "react";

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setLikes(likes + 1); // Increase the like count
    setColorIndex((colorIndex + 1) % colors.length); // Change the color index
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
