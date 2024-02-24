import React, { useState } from 'react';

function LikeButton() {
  
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

   return (
    <button onClick={incrementLikes}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
