import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button onClick={handleClick}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
