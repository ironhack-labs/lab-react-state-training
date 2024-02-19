import React from "react";
import { useState } from "react";

function LikeButton() {
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  const increment1 = () => setLike1((like1) => like1 + 1);
  const increment2 = () => setLike2((like2) => like2 + 1);

  return (
    <div>
      <button className="counter-button" onClick={increment1}>
        <span className="counter-value">{like1}</span>
        Likes
      </button>

      <button className="counter-button" onClick={increment2}>
        <span className="counter-value">{like2}</span>
        Likes
      </button>
    </div>
  );
}

export default LikeButton;
