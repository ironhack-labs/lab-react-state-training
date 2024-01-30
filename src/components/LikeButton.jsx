import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="likeButton">
      <button onClick={handleButtonClick}> {count} Likes</button>
    </div>
  );
}
