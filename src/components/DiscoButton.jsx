import React, { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    if (likes < 10) {
      setLikes(likes + 1);
      setColorIndex(colorIndex + 1 >= colors.length ? 0 : colorIndex + 1);
    }
  };

  return (
    <button
      style={{ backgroundColor: colors[colorIndex] }}
      onClick={handleClick}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
