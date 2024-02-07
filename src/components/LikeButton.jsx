import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="container1">
      <button onClick={() => setLikes(likes + 1)}>{likes} likes</button>
    </div>
  );
}

export default LikeButton;
