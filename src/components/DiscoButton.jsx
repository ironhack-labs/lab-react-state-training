import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [likes, setLikes] = useState(0);

  const randomNum = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomNum];
  return (
    <button
      style={{
        background: randomColor,
        border: "none",
        margin: "5px",
        fontSize: "32px",
        color: "#fff",
      }}
      onClick={() => setLikes((l) => l + 1)}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
