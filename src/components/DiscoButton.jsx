
import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length); // cycle through colors
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: "white",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
