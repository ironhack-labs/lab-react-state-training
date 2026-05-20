import { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("purple");
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLikes = () => {
    setLikes(likes + 1);

    const randomNum = Math.floor(Math.random() * 6);

    setColor(colors[randomNum]);
  };

  return (
    <>
      <button
        onClick={handleLikes}
        style={{ backgroundColor: color, color: "white" }}
      >
        {likes} likes
      </button>
    </>
  );
}

export default DiscoButton;
