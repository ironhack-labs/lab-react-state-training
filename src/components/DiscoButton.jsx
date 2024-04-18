import React, { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLike = () => {
    setLikes(likes + 1);
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={handleLike}
      style={{ backgroundColor: colors[currentColorIndex] }}
    >
      {likes} {likes === 1 ? "Like" : "Likes"}
    </button>
  );
}

export default DiscoButton;
