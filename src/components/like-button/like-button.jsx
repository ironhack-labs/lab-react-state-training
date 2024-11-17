import { useState } from "react";

function LikeButton({ className = "", onClick, style }) {
  const [likes, setLikesCount] = useState(0);

  const handleCounter = () => {
    setLikesCount(likes + 1);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={className} onClick={handleCounter} style={style}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
