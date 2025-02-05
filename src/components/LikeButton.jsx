import React from 'react'
import { useState } from 'react'

function LikeButton() {

    const [displayCount, setDisplayCount] = useState(0);

    const incrementCounter = () => {


        setDisplayCount(displayCount + 1)
    }

  return (

    <>
    <div className='btnDiv'>

        <button className='btnDiv' onClick={incrementCounter}>
            <p>{displayCount}</p>

            Likes
        </button>
    </div>
    </>
  )
}

export default LikeButton