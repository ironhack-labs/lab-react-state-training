import { useState } from "react";

const LikeButton = () => {
  let [likes, setLikes] = useState(0);
  const handleButtonClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-button">
      <button onClick={handleButtonClick}> {likes} likes </button>
    </div>
  );
};

export default LikeButton;
