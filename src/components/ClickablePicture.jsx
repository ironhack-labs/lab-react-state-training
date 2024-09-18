import { useState } from 'react'
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'
function ClickablePicture() {
  const [isImage, setIsImage] = useState(true)
  const changeImage = () => {
    setIsImage(!isImage)
  }
  return (
    <div onClick={changeImage} style={{ margin: '20px' }}>
      <img src={isImage ? maxence : maxenceGlasses} alt="" />
    </div>
  )
}

export default ClickablePicture
