import { useState } from "react";

export function LikeButton() {

  const [count, setCount] = useState(0);
  const IncrementCount = () => {
    setCount(count+1)
  }
  return (
    <>

      <button className="LikeButton" onClick={IncrementCount}>{count} Likes</button>
    </>
  )
}