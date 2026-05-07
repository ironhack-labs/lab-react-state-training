import { useState } from "react";

function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  function handleClick() {
    setLikes(likes + 1);

    if (colorIndex === colors.length - 1) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);
    }
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: colors[colorIndex] }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;