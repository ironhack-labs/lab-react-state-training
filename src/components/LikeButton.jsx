import "./LikeButton.css";
import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);
  return (
    <div className="Counter">
      <button onClick={() => setLike(like + 1)}>{like} Like </button>
    </div>
  );
}

export default LikeButton;
