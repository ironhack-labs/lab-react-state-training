import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-3">
    <button onClick={handleClick}>
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
    </div>
  );
};

export default LikeButton;
