import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <button onClick={increment} className="likeBtn">
      <span> {count} Likes </span>
    </button>
  );
}
export default LikeButton;
