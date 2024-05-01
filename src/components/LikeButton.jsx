import React, { useState } from 'react'

function LikeButton() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    // evento para incrementar al clickar
    const handleIncrease1 = () => setCounter1(counter1 + 1)
    const handleIncrease2 = () => setCounter2(counter2 + 1)
    

  return (
    <div>
        <button onClick={handleIncrease1}>{counter1} Likes</button>
        <button onClick={handleIncrease2}>{counter2} Likes</button>
    </div>
  )
}

export default LikeButton