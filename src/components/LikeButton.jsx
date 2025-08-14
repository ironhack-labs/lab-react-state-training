import { useState } from "react";


function LikeButton() {
  const [likeCount, setCount] = useState(0);
  
  function handleClick() {
    setCount(likeCount + 1);
  }

  return (
    <>
    <button onClick={handleClick}>Like</button>
    <p>Likes: {likeCount}</p>
    </>
  )
}

export default LikeButton
