import React, { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {
  const [count, setCount] = useState(0);
  return (
    <button className="like-button" onClick={() => setCount(count + 1)}>
      {count} likes
    </button>
  );
};

export default LikeButton;
