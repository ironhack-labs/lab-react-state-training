import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0); // Initialize state

  const handleClick = () => {
    setLikes(likes + 1); // Update state on click
  };

  return (
    <button className="likebutton" onClick={handleClick}>{likes} Likes
    </button>
  );
}

export default LikeButton;