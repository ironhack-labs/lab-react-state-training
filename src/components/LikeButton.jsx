import { useState } from "react";

function LikeButton() {
  let [counter, updateCount] = useState(0);
  const increaseCount = () => {
    updateCount(counter + 1);
  };

  return <button onClick={increaseCount}>{counter} Likes</button>;
}

export default LikeButton;
