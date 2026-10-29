import React, { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>{count} Likes</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
}
