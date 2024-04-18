import "../../src/App.css";
import { useState } from "react";

function LikeButton() {
  const [num, setCount] = useState(0);

  return (
    <div>
      <button className="like-button" onClick={() => setCount(num + 1)}>
        {num + " Likes"}
      </button>
    </div>
  );
}

export default LikeButton;
