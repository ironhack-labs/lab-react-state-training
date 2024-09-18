import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const handleLikes = () => {setLikes(likes+1)}

  return (
    <div>
      <button onClick={handleLikes}>{likes} Likes</button>
    </div>
  )
}

export default LikeButton