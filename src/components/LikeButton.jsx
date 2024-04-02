import { useState } from "react";
import "./LikeButton.css";
const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const likeCountHandler = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <button type="button" onClick={likeCountHandler}>
      {likeCount} Likes
    </button>
  );
};

export default LikeButton;
