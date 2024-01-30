import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const likeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <p> {likes} Likes</p>
      <button onClick={likeClick}>Like</button>
    </div>
  );
}

export default LikeButton;
