import noGlasses from "./assets/images/maxence.png"
import glassesOn from "./assets/images/maxence-glasses.png"
import { useState } from "react"

function ClickablePicture() {
  
  const [withGlasses, setWithGlasses] = useState(false)
  
  const handleClick = () => {
    setWithGlasses(!withGlasses)
  }

  return (
    <div>
      <img src={withGlasses ? noGlasses : glassesOn} onClick={handleClick} alt="picture" />
     

    </div>
  )
}

export default ClickablePicture