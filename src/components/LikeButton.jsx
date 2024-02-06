import { useState } from "react";

export const LikeButton = () => {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter((prev) => prev + 1);
  };
  return <button onClick={handleButtonClick}>{counter} Likes</button>;
};
