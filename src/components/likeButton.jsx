import { useState } from "react"

function LikeBtn () {
  const [like, setLike] = useState(0)
  const handleLike = () => {
    setLike (like +1)
  }
  const btnStyle = {
    marginRight: 5,
  }
  return (
    <button style={btnStyle} onClick={handleLike}>{like} Likes</button>
  )
}

export default LikeBtn