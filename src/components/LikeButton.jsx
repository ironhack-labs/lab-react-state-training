import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1)
  }

  return (
    <button onClick={handleClick}>{likes} {likes === 1 ? 'Like' : 'Likes'}</button>
  )
}

export default LikeButton;