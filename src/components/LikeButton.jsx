import { useState } from "react";

export const LikeButton = () => {
  const [liked, setLiked] = useState(0);

  return (
    <button className="like-button" onClick={() => setLiked(liked + 1)}>
      {liked} likes
    </button>
  );
};
