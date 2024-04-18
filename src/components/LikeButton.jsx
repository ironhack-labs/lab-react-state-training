import React, { useState } from "react";

function LikeButton() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  return (
    <div className="LikeButton">
      <button id="LikeOne" onClick={() => setCountOne(countOne + 1)}>
        {" "}
        {countOne} Likes{" "}
      </button>
      <button id="LikeTwo" onClick={() => setCountTwo(countTwo + 1)}>
        {" "}
        {countTwo} Likes{" "}
      </button>
    </div>
  );
}

export default LikeButton;
