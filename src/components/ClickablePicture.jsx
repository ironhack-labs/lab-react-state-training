import React from 'react'
import maxence from "../assets/images/maxence.png"
import glasses from "../assets/images/maxence-glasses.png"
import { useState } from 'react'

function ClickablePicture() {
    const  [image,setImage] = useState(maxence)

    function toggleglasses(){
        setImage(image===maxence? glasses:maxence)
    }

  return (
    <div>
        <img src={image} alt="maxence" onClick={toggleglasses}/>
    </div>
  )
}

export default ClickablePicture