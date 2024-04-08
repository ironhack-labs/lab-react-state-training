import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  return (
    <button onClick={() => setLike(like + 1)}>
      {like} {like === 1 ? "Like" : "Likes"}
    </button>
  );
};

export default LikeButton;
