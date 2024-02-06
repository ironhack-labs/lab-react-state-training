import { useState } from "react";

export default function DiscoButton() {
  const bgColors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [likesCount, setLikesCount] = useState(0);
  const [buttonColorIndex, setButtonColorIndex] = useState(0);
  function incrementCount() {
    setLikesCount(likesCount + 1);
    setButtonColorIndex((prevIndex) => (prevIndex >= 5 ? 0 : prevIndex + 1));
  }
  return (
    <button
      style={{ backgroundColor: `${bgColors[buttonColorIndex]}` }}
      onClick={incrementCount}
    >
      {likesCount} Likes
    </button>
  );
}
