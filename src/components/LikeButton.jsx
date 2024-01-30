import { useState } from "react";

export default function LikeButton() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="like-button">
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        {counter} Likes
      </button>
    </div>
  );
}
