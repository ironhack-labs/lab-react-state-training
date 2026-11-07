import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleIncrement() {
    setLikes(likes + 1);
  }

  return (
    <button className="like-button" onClick={handleIncrement}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
