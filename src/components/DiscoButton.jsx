import React, { useState } from "react";

function DiscoButton() {
  const [likeCount, setLikeCount] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [color, setColor] = useState("white");

  function randomColor() {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
  }

  function handleClick() {
    setLikeCount(likeCount + 1);
    randomColor();
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {likeCount} Likes
    </button>
  );
}

export default DiscoButton;
