import { useState } from "react"

function LikeButton() {
  
  let [likeButton, setLikeButton] = useState(0)

  const handleIncrease = () => {
    setLikeButton(likeButton + 1)
    setSecondLikeButton(secondLikeButton +1)
  }

  return (
    <div>
      <button onClick={handleIncrease}>{likeButton} Likes </button>
    </div>
  )
}

export default LikeButton