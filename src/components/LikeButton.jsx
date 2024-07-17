import React from 'react'
import { useState } from 'react';

function LikeButton() {

    const [likeNum, setLike] = useState(0);

    
    const handleLikeButton = () => setLike(likeNum+1);
    
  return (
    <div>
        <button onClick={handleLikeButton}><span>{`${likeNum}`}</span> Likes</button>
    </div>
  )
}

export default LikeButton;