import React, { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);

  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length); // Cambiar al siguiente color
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
