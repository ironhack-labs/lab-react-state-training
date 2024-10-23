import { useState } from "react";

const LikeButton = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button onClick={increaseCounter}>{counter} Likes</button>
    </div>
  );
};

export default LikeButton;
