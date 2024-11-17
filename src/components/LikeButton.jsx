import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  return(
    <>
    <button onClick={() => setCount(count + 1)} className="btn">{count} Likes</button>
    </>
  )
}
export default LikeButton;
