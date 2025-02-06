import React, { useState } from 'react'

function LikeButton() {
    const [increment, setIncrement] = useState(0);
    const incrementNumb = () => {
        setIncrement((numb) => numb + 1);
    }
  return (
    <>
        <button className='button-item' onClick={incrementNumb}>{increment} Likes</button>
    </>
  )
}

export default LikeButton