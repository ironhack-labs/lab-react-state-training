import React from 'react'
import { useState } from 'react'
function DiscoButton() {
    const [likes,setLikes] = useState(0)
    const [color,setColor] = useState(null)
    const colorArr = ["purple", "blue", "green", "yellow", "orange", "red"]

    function handleLike(){
        setLikes(likes + 1)
        setColor(colorArr[Math.floor(Math.random()*colorArr.length)])
    }


  return (
    <div> 
        <button onClick={handleLike} style={{backgroundColor: color}}>{likes} Likes</button>
    </div>
  )
}

export default DiscoButton

