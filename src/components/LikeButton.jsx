import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleClick}>{likes} Likes</button>
  );
}

export default LikeButton;