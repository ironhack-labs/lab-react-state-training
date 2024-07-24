import { useState } from "react"

const LikeButton = () => {
  const [likes, setLikes] = useState(0)
  const handleLikes = () => {
    setLikes(likes + 1)
  }
  return (
    <button onClick={handleLikes} className="LikeButton">{likes} Likes</button>
  )
}

export default LikeButton