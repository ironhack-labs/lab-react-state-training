import React, { useState } from 'react'

export default function LikeButtons() {

    const [likes, setLikes] = useState(0)
    const handleIncrement = () => {

        setLikes(likes + 1)
    }


  return (
    <div>

        <button onClick={handleIncrement}>{likes} likes</button>


    </div>
  )
}
