import React, { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const increaseLikes = () => {
    setLikes(likes + 1);
  };
  return (
    <div>
      <button onClick={() => increaseLikes()}>{likes} likes</button>
    </div>
  );
}

export default LikeButton;
