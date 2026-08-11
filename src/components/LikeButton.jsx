import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const handleLikeButton = () => {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleLikeButton}>{likes} Likes</button>
  );
}

export default LikeButton;