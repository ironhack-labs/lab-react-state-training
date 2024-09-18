import { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const handleClick = () => {
    setLikes(likes + 1);

    const nextColor = colors[(likes + 1) % colors.length];
    setCurrentColor(nextColor);
  };

  return (
    <button onClick={handleClick}>
      {likes} {likes === 1 ? "Like" : "Likes"}
    </button>
  );
}

export default DiscoButton;
