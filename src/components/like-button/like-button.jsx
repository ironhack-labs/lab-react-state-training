import { useState } from "react";

function LikeButton({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const handleCountUp = () => setCount(count + 1);

  return (
    <button type="button" className="btn btn-outline-dark" onClick={handleCountUp}>{count} likes</button>
  );
}

export default LikeButton;