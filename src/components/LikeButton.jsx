import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increaseCount}> {count} Likes</button>
    </div>
  );
}

export default LikeButton;
