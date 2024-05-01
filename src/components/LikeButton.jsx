import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <button onClick={handleLike}>
      {likes === 0 ? '0 Likes' : `${likes} Likes`}
    </button>
  );
};

export default LikeButton;
