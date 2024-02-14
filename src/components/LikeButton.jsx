import { useState } from "react";

function LikeButton() {
  const [likeCounterValue, setLikeCounterValue] = useState(0);
  const handleIncrease = () => {
    setLikeCounterValue(likeCounterValue + 1);
  };
  return (
    <div>
      <button onClick={handleIncrease}>
        <h1>{likeCounterValue} LIKES</h1>
      </button>
    </div>
  );
}

export default LikeButton;
