import { useState } from "react";

function LikeButton() {
  const [count, setLikes] = useState(0);

  const incrementCount = () => {
    setLikes(count + 1);
  };
  return (
    <>
      <button onClick={() => incrementCount()}>{count} likes</button>
    </>
  );
}
export default LikeButton;
