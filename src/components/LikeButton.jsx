import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  function countLikesLeft() {
    setCount((prevCountLeft) => prevCountLeft + 1);
  }

  return (
    <div className="Counter">
      <button onClick={countLikesLeft}>{count} Likes</button>
    </div>
  );
}

export default LikeButton;
