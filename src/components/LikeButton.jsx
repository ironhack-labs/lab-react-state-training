import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
      <button
        style={{ fontSize: '18px', margin: '3px'}}
        onClick={() => setCount(count + 1)}
      >
        {count} Likes
      </button>
  );
}

export default LikeButton;