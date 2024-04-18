import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1); // CANNOT use count++
  };

  return (
    <div className="likeButton">
      <button onClick={handleButtonClick}> {count} likes</button>
    </div>
  );
}

export default LikeButton;
