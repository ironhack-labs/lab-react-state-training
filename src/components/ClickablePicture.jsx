import { useState } from "react"
import maxenceGlasses from '../../src/assets/images/maxence-glasses.png'
import maxence from '../../src/assets/images/maxence.png'

function ClickablePicture() {

  const [glassesOn, setGlassesOn] = useState(false)

  const toggleImage = () => {
    setGlassesOn(!glassesOn)
  }

  return (
    <div className="glasses-container">
      <img src={glassesOn ? maxenceGlasses : maxence} onClick={toggleImage} style={{ width: '100px' }}/>
    </div>
  )
}

export default ClickablePicture