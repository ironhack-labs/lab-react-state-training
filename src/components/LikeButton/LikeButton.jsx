// ! modules
import { useState } from "react";

// ? styles
import "./LikeButton.css";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
      className="like-button"
    >
      {count}Likes
    </button>
  );
}
