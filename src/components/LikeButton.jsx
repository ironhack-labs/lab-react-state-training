import { useState } from "react";

function LikeButton() {
  const [likesCounter, setLikesCount] = useState(0);

  const increaseLikes = () => {
    setLikesCount(likesCounter + 1);
  };

  return (
    <div>
      <button onClick={increaseLikes}>{likesCounter} Likes</button>
    </div>
  );
}
export default LikeButton;
