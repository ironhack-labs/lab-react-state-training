import React, { useState } from 'react'
import maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {

  const [image, setImage] = useState(maxence)
  
  const handleClick = () =>{
    if(image ===maxence){
      setImage(maxenceGlasses)
    }else if(image === maxenceGlasses){
      setImage(maxence)
    }
  }

  return (
    <div>
      <img onClick={handleClick} alt="joven" />

    </div>

  )
}

export default ClickablePicture