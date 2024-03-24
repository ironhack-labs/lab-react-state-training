import React from "react";
import "./LikeButton.css";
import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <button className="but" onClick={() => handleClick()}>
      {likes}
    </button>
  );
}

export default LikeButton;
