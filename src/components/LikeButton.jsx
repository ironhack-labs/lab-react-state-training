import React from 'react'
import { useState } from 'react'

function LikeButton() {
    const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [backgroundRandom, setBackgroundRandom] = useState(null)
    const [likesNum, setLikesNum] = useState(0)
    
    const handleLikes = () =>{ setLikesNum(likesNum +1); setBackgroundRandom(colorsArr[Math.floor(Math.random()*5)]) } 
    
    
  return (
    <div>
      <button id="likes-button"  style={{backgroundColor: backgroundRandom}}  onClick={handleLikes}> {likesNum} Likes</button>
    </div>
  )
}

export default LikeButton
