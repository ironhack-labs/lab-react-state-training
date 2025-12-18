
// Import the useState hook from React


import { useState } from "react";



function LikeButton() {
  const [likes, setLikes] = useState(0); // state for likes
  function addLike() {
    setLikes(likes + 1);
  }
  return (
    <button onClick={addLike}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
