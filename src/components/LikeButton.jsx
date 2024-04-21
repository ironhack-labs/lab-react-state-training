import React from "react";
import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="LikeButton">
      <h2>Iteraction 1 - Like Button</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
