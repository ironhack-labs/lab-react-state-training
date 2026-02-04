import React, { useState } from 'react'
import glass from "../assets/images/maxence-glasses.png"
import noGlass from "../assets/images/maxence.png"

function ClickablePicture() {
    const [image, setImage] = useState(noGlass)
  return (
    <div>
        <img src={image} alt="" onClick={() => setImage(image === noGlass ? glass: noGlass)}/>
    </div>
  )
}

export default ClickablePicture