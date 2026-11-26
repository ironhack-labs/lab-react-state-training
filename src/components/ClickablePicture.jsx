import { useState } from "react";

import imgSrc from '../assets/images/maxence.png'
import imgSrcGlasses from '../assets/images/maxence-glasses.png'
 
function ClickablePicture() {
  const [isClicked, setisClicked] = useState(false)
 
  const togglePlay = () => {
    setisClicked(!isClicked);
  }

  const img = isClicked ? imgSrcGlasses : imgSrc

  return (
    <>
      <img src={img} alt="foto" onClick={togglePlay} />
    </>
  )
}
 
export default ClickablePicture;