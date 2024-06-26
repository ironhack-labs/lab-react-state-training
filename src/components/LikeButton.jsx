import React, { useState } from "react";

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  return (
    <>
      <button onClick={() => setLikeCount(likeCount + 1)}>
        {likeCount} Likes
      </button>
    </>
  );
}

export default LikeButton;
