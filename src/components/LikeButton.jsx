import { useState } from 'react'

function LikeButton() {
  const [like, setLikes] = useState(0)
  function handlecount() {
    setLikes(like + 1)
  }
  return (
    <div style={{ margin: '20px' }}>
      <button onClick={handlecount}> {like} Likes</button>
    </div>
  )
}

export default LikeButton
