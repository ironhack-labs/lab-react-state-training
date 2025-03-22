import { useState } from 'react';

function LikeButton() {
  const [likesCount, setLikesCount] = useState(0);

  const handleClick = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <button onClick={handleClick}>
      {likesCount} Likes
    </button>
    );
}

export default LikeButton;