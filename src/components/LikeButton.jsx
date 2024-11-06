import { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const decrementLikes = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="like-button-container">
      <button onClick={decrementLikes} className="like-button decrement">
        -
      </button>
      <span className="like-count">{likes} Likes</span>
      <button onClick={incrementLikes} className="like-button increment">
        +
      </button>
    </div>
  );
};

export default LikeButton;
