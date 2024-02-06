import { useState } from "react";

export default function LikeButton() {
  const [likesCount, setLikesCount] = useState(0);
  function incrementCount() {
    setLikesCount(likesCount + 1);
  }
  return <button onClick={incrementCount}>{likesCount} Likes</button>;
}
