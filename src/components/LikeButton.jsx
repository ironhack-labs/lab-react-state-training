import React from "react";

const LikeButton = ({ handleCliked, likes }) => {
  return (
    <div>
      <button onClick={handleCliked}>{likes} likes</button>
    </div>
  );
};

export default LikeButton;
