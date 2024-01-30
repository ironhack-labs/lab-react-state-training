import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="LikeButton">
      <h2>Like Button</h2>
      <button onClick={() => setCount(count + 1)}> {count} Likes</button>
    </div>
  );
}
export default LikeButton;
