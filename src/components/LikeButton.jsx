import { useState } from "react"

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function incrementLikes() {
    setLikes(likes + 1)
  }

  return (
    <button onClick={incrementLikes}>{likes} likes</button>
  )
}