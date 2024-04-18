import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return <button onClick={handleLikeClick}>{likes} Likes</button>;
};

export default LikeButton;
