import { useState } from "react";

function LikeButton({ style, onClick }) {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLikes(likes + 1);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={increaseLikes}
      className="btn"
      style={{ ...style, cursor: "pointer" }}
    >
      <span>{likes}</span> Likes
    </button>
  );
}

export default LikeButton;
