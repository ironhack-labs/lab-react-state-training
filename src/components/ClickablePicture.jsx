import React, { useState } from 'react'
import image1 from '../assets/images/maxence.png'
import image2 from '../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [ images, setImages ] = useState(image1)

    const handleImages = () => {
        {images === image1 ? setImages(image2) : setImages(image1)}
    }

  return (
    <div>
        <img onClick={handleImages} src={images} alt="image" />
    </div>
  )
}

export default ClickablePicture
