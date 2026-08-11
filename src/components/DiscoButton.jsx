import { useState } from "react";

function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);

    // Move to next color
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "18px",
      }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
