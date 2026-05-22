import { useState } from "react";

const COLORS = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % COLORS.length);
  };

  return (
    <button
      className="disco-btn"
      style={{ backgroundColor: COLORS[colorIndex] }}
      onClick={handleClick}
    >
      ♥ {likes} Likes
    </button>
  );
}

export default DiscoButton;