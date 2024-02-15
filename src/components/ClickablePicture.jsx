import max1 from "../assets/images/maxence.png"
import max2 from "../assets/images/maxence-glasses.png"

import { useState } from "react";

function ClickablePicture() {
    let srcImg;

    const [currentPincture, setCurrentPicture] = useState(max1)

    const handleSunGlasses = () => {
        setCurrentPicture(currentPincture === max1 ? max2 : max1)
    }

    

  return (
    <div>
        <img onClick={handleSunGlasses} src={currentPincture} alt="" />
    </div>
  )
}

export default ClickablePicture