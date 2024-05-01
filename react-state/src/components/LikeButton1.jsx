import React from 'react'
import { useState } from 'react'

function LikeButton1() {
    let [counter, setCounter]=useState(0)
    const handleIncrease=()=>{
        setCounter(counter+1)







    }
    


  return (
    <div>
      <button onClick={handleIncrease}>{counter}Likes</button>
      

    </div>
  )
}

export default LikeButton1
