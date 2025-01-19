import React, { useState } from "react";

function LikeButton({ className = "" }) {
  const [count, setCount] = useState(0);

  return (
    <button
      className="border border-black rounded px-2 m-2"
      onClick={() => setCount(count + 1)}
    >{`${count} Likes`}</button>
  );
}

export default LikeButton;
