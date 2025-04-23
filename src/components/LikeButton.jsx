import { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="like-button">
      <button onClick={() => setCount(count + 1)}>{count} Like</button>
    </div>
  );
};

export default LikeButton;
