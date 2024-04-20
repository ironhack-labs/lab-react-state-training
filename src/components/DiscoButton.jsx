import React, { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLike = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={handleLike}
      style={{ backgroundColor: colors[colorIndex], color: "white" }}
    >
      {likes} {likes === 1 ? "like" : "likes"}
    </button>
  );
}

export default DiscoButton;
