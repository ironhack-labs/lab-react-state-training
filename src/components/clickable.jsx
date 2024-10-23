import React, { useState } from 'react'
import firstimg from '../assets/images/maxence.png'
import secimg from '../assets/images/maxence-glasses.png'
const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false)

  const chnagePic = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <img src={isClicked ? secimg : firstimg} alt='' onClick={chnagePic} />
    </>
  )
}
export default ClickablePicture
