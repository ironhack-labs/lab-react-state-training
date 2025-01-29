import React, { useState } from "react";

function LikeButton() {
  // Declare state for the number of likes, starting at 0
  const [likes, setLikes] = useState(0);

  // Handler for button click to increment the number of likes
  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div class="button-container">
      <button onClick={handleClick}>{likes} Likes</button>
    </div>
  );
}

export default LikeButton;
