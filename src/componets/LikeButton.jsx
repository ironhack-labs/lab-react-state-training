import React, { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleSetLikes = () => {
    setLikes(likes + 1);
  };

  return <button onClick={handleSetLikes}> {likes}likes </button>;
}

export default LikeButton;
