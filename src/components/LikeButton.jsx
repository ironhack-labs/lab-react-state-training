import { useState } from "react";
 
function LikeButton() {
  const [count, setCount] = useState(0)
 
  const handleLike = () => {
    setCount(count + 1)
  }
 
  return (
      <button onClick={handleLike}>{count} likes</button>
  )
}
 
export default LikeButton;