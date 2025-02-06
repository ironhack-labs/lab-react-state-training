import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const handleClick = () => {
    setLikes(likes + 1);
  };
  return (
    <button className="likeButton" onClick={handleClick}>
      {likes}Like
    </button>
  );
}

export default LikeButton;
