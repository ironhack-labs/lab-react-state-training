import React from 'react'
import { useState } from "react";
import imgMaxence from "../assets/images/maxence.png"
import imgMaxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [imageMax, setImageMax]= useState(imgMaxence);

    const handleImage =()=>{
        setImageMax(imgPrevia => (imgPrevia === imgMaxence ? imgMaxenceGlasses : imgMaxence))
    }


  return (
    <div>
        <img 
        src={imageMax} 
        alt="imagen persona" 
        onClick={handleImage} 
        className="imagen-max"/>

    </div>
  )
}

export default ClickablePicture