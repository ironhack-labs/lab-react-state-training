import { useState } from "react";

function likeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)} className="like-btn">
      {likes} Likes
    </button>
  );
}

export default likeButton;
