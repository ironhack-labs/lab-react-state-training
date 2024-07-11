import React, { useState } from "react";

function DiscoButton() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("purple");
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setCount(count + 1);
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  return (
    <button
      className="disco"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      {count} Likes
    </button>
  );
}

export default DiscoButton;
