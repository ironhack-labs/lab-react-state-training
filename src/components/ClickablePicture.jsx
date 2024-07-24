import maxenceImg from './../assets/images/maxence.png'
import maxenceGlassesImg from './../assets/images/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = () => {
  const images = [maxenceImg, maxenceGlassesImg]
  const [image, setImage] = useState(images[0])
  const handleImage = () => {
    setImage(!images.indexOf(image) ? images[1] : images[0])
  }
  return (
    <img onClick={handleImage} src={image} alt="Clicable picture" className="ClickablePicture" />
  )
}

export default ClickablePicture


