import React from 'react'
import { useState } from "react";

function LikeButton() {
    
    const [likeBoton, setLikeBoton] = useState(0)
    const handleIncrease= ()=>{
        setLikeBoton( likeBoton + 1)
    }


  return (
    <div>
        <button onClick= {handleIncrease} className="button-like"> {likeBoton} Likes</button>
    </div>
  )
}

export default LikeButton