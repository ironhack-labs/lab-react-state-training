import React, { useState } from 'react'

function LikeButton() {
  const [numLikes, setNumLikes] = useState(0)
  const handleLikes = () => (
    setNumLikes(numLikes + 1)
  ) 


  return (
    
    

    <button onClick={handleLikes}>{numLikes}Likes</button>
  )
}

export default LikeButton