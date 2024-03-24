import "./DiscoButton.css";
import { useState } from "react";
function DiscoButton() {
  const arr = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(
    arr[Math.floor(Math.random() * (arr.length - 1))]
  );
  function handleClick() {
    setColor(arr[Math.floor(Math.random() * (arr.length - 1))]);
    setLikes(likes + 1);
  }
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className="but"
      onClick={() => handleClick()}
    >
      {likes} likes
    </button>
  );
}

export default DiscoButton;
