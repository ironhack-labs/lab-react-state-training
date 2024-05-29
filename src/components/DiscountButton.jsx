import React, { useState } from "react";

const COLORS = ["purple", "blue", "green", "yellow", "orange", "red"];

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
  };

  const currentColor = COLORS[colorIndex];

  return (
    <button style={{ backgroundColor: currentColor }} onClick={handleClick}>
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
