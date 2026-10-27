import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>{likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;