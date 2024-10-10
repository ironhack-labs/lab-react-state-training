import React from "react";
import { useState } from "react";
function LikeButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count} Likes</button>;
}

export default LikeButton;
