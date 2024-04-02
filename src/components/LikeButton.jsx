import React, { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const clickButton = () => {
    setLikes((countLikes) => countLikes + 1);
  };

  return (
    <div>
      <button onClick={clickButton}>
        {likes} {likes === 1 ? "like" : "Likes"}
      </button>
    </div>
  );
}

export default LikeButton;
