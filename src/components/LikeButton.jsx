import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  const likeIncrease = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Likes: {count}</p>
      <button onClick={likeIncrease}>Like</button>
    </div>
  );
}

export default LikeButton;
