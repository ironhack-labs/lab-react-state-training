import { useState } from "react"

function LikeButton() {

  const [ likes, setLikes ] = useState(0)

  const handleLikes = () => {
    setLikes(likes + 1)
  }

  return (
    <div className="like-btn">
      <button onClick={ handleLikes }>{likes} Likes</button>
    </div>
  )
}

export default LikeButton