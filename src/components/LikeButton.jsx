import React, { useState } from 'react'

export default function LikeButton() {
  let [count, setCount] = useState(0)
  let [count2, setCount2] = useState(0)


  const handleIncrease = () => {
    setCount(count+1)
  }

  const handleIncrease2 = () => {
    setCount2(count2+1)
  }

  return (
    <div>
      <button onClick={handleIncrease}>{count} likes</button>
      <button onClick={handleIncrease2}>{count2} likes</button>
    </div>
  )
}
