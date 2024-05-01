import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button onClick={handleLikeClick}>
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  );
}

export default LikeButton;