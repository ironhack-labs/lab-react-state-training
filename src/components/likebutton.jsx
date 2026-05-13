import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function newLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={newLike}>{likes} likes</button>
    </div>
  );
}

export default LikeButton;
