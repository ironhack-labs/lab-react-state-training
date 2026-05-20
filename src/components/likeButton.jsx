import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>{count} likes</button>
    </div>
  );
}

export default LikeButton;
