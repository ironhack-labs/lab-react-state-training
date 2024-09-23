import React, { useState } from 'react'
import image1 from "../assets/images/maxence.png"
import image2 from "../assets/images/maxence-glasses.png"


function ClickablePicture() {

  const [image ,setImage ] = useState(image1) 
  
  const handleImg = () => (
    image === image1 ? setImage(image2) : setImage(image1)
  )


  return (
    
    <div>
      <img src={image} alt=""  onClick={handleImg}/>
    </div>
  )

}
export default ClickablePicture