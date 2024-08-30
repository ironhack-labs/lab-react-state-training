import React from "react";
import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>{like} Likes</button>
    </div>
  );
}

export default LikeButton;
