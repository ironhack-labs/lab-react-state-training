import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes((prev) => prev + 1);
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: colors[colorIndex], color: "white" }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
