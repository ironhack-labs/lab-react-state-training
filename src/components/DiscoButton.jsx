import { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const backgroundColor = colors[likes % colors.length];

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor, color: "white", padding: "10px 20px", fontSize: "16px" }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
