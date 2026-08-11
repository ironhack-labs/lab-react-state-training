import { useState } from 'react'
import maxence1 from "../assets/images/maxence.png";
import maxence2 from "../assets/images/maxence-glasses.png";
function ClickablePicture() {
    const [hasGlasses, setHasGlasses] = useState (true)

    const handleClickablePicture = () => {
        setHasGlasses(!hasGlasses)
    }


  return (
 <div>
<img 
src={hasGlasses ? maxence2 : maxence1} onClick={handleClickablePicture} alt="" />
</div>

  )

}

export default ClickablePicture
