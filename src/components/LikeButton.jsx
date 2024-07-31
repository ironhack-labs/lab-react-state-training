import React, { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count} Likes</button>
    </div>
  );
}
