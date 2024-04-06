import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button className="button" onClick={handleLikeClick}>
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
