import imageMaxence from "../assets/images/maxence.png"
import imageMaxenceGlasses from "../assets/images/maxence-glasses.png"
import imageGlasses from "../assets/images/glasses.png"

import { useState } from "react"

function ClickablePicture() {
    const [hasGlasses, setHasGlasses] = useState(false)
    const handleImageClick = () => { setHasGlasses(hasGlasses? false:true)}

  return (
    <div>
        <img  
        onClick={handleImageClick} 
        src={hasGlasses? imageMaxenceGlasses: imageMaxence} alt="Maxence" />

    </div>
  )
}
export default ClickablePicture