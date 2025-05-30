import { useState } from "react";

function LikeButton({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const handleSetCount = () => setCount(count + 1);

  return (
    <button type="button" className="btn btn-outline-dark" onClick={handleSetCount}>{count} Likes</button>
  );
}

export default LikeButton;