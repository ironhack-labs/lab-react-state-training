// ### Iteration 1 | `LikeButton`

// // Create a `LikeButton` component that has a state and
// displays a button with the initial text `"0 Likes"`.
// With each click, the number of Likes should increase.

import React, { useState } from "react";
import "../css/LikeButton.css";
function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <button className="like-button" onClick={handleLike}>
      {likes} Likes{" "}
    </button>
  );
}

export default LikeButton;
