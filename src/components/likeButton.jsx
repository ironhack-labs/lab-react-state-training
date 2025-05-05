//create a like button component
import React, { useState } from "react";

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = () => {
    setLikeCount(likeCount + 1);
  };

  return <button onClick={handleClick}>Likes: {likeCount}</button>;
}

export default LikeButton;
