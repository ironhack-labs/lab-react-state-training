import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleLikeBtn = () => setCount(count + 1);

  return (
    <button className="m-2" onClick={handleLikeBtn}>
      {count} likes
    </button>
  );
}

export default LikeButton;
