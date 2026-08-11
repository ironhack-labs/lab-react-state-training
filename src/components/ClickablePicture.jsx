import React from 'react'
import { useState } from 'react'
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    let [image,setImage] = useState(true)

function handleClick(){
setImage(!image)
}

  return (
    <img src={image ? maxence : maxenceGlasses} onClick={(handleClick)}  />
  )
}

export default ClickablePicture
