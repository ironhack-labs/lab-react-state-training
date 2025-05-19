import React, { useState } from 'react'

function LikeButton() {

    const[likes, setLikes] = useState(0)

    function handleSumarLike() {
        console.log("probando")
        setLikes(likes + 1)
    }

  return (
    <button onClick={handleSumarLike}>
        {likes} {likes === 1 ? `Like` : `Likes`}
    </button>
  )
}

export default LikeButton
