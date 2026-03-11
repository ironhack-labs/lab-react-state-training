import { useState } from 'react'

function LikeButton() {

    const [likes, setlikes] = useState(0)

    const incrementLikes = () => {
        setlikes(likes + 1)
    }

  return (
    <div>
      <button onClick={incrementLikes}>{likes} likes
      </button>
    </div>
  )
}

export default LikeButton
