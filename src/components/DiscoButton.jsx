import { useState } from "react";

function DiscoButton() {
  const colors = [
    "purple",
    "blue",
    "green",
    "yellow",
    "orange",
    "red"
  ];

  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);

    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px"
      }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;