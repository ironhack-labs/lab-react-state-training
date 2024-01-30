import './LikeButton.css'
import React, { useState } from 'react'

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0)

  const likeCountHandler = () => {
    setLikeCount(likeCount + 1)
  }

  return (
    <div>
      <button onClick={() => likeCountHandler()} className='btn-count'>{likeCount} Likes</button>
    </div>
  )
}

export default LikeButton