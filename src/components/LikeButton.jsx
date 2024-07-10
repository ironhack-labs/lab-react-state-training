import React from 'react'
import { useState } from 'react'
function LikeButton() {
    const [likes,setLikes] = useState(0)
    function handleLike(){
        setLikes(likes + 1)
    }
  return (
    <div>
        <button onClick={handleLike}>{likes} Likes</button>
    </div>
  )
}

export default LikeButton