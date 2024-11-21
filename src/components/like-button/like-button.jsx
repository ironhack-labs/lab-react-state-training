import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0); // Initialize state for likes

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1); // Increment likes on button click
  };

  return (
    <button onClick={handleLike}>
      {likes} {likes === 1 ? "Like" : "Likes"}
    </button>
  );
};

export default LikeButton;