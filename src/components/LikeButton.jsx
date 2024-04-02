import { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button className="like-button" onClick={() => {
      console.log(likes);
      setLikes(likes + 1);
    }}>
      {likes + ' likes'}
    </button>
  );
};

export default LikeButton;