import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleCounter = () => setCount(count + 1);

  return (
    <button onClick={handleCounter}>
      {count} Likes
    </button>
  );
}

export default LikeButton;
