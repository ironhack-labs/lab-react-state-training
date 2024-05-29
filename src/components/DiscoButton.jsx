import React, { useState } from 'react'

const DiscoButton = () => {
    const [like, setLike] = useState(0)
    const [bckColorIndex, setBckColorIndex] = useState(0)

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    function handleClick(){
      setLike((count)=>count + 1)
      setBckColorIndex((bckColorIndex + 1) % colors.length);
      
    }
  return (
    <div>
        <button 
        style={{ backgroundColor: colors[bckColorIndex] }}
        onClick={handleClick}>{`${like}`} Likes</button>
        
    </div>
  )
}

export default DiscoButton