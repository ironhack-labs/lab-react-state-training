import { useState } from "react";

function DiscoButton() {
  const [like, setLike] = useState(0);
  const [color, setColor] = useState("black");
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "black",
  ];
  const handleLike = () => {
    setLike((prev) => prev + 1);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <button
      style={{ backgroundColor: color, color: "white" }}
      onClick={handleLike}
    >
      {like} likes
    </button>
  );
}

export default DiscoButton;
