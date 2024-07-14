import React, { useState } from 'react'

function LikeButton() {

    const [ count, setCount ] = useState(0)
    const increment = () => setCount((prevCount) => prevCount +1)
    
  return (
    <div>
      <button className='counter-button' onClick={increment}>{count} Likes</button>
    </div>
  )
}

export default LikeButton
