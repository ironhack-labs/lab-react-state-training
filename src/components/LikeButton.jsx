import React from "react";
import { useState } from "react";

function LikeButton() {
  const [counterUp, setCounterUp] = useState(0);

  let handleIncrease = () => {
    setCounterUp(counterUp + 1);
  };

  return (
    <div>
      <h2>LikeButton</h2>

      <button onClick={handleIncrease}> {`${counterUp}`} Likes </button>
    </div>
  );
}

{
}

export default LikeButton;
