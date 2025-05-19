import React, { useState } from "react";

function Counter() {
  const [likes, setLikes] = useState(0);

  function handleSumarLike() {
    setLikes(likes + 1);
  }
  function handleRestarLike() {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button onClick={handleSumarLike}>+</button>
      <p>{likes}</p>
      <button onClick={handleRestarLike}>-</button>
    </div>
  );
}

export default Counter;
