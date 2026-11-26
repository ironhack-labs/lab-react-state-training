import { useState } from "react"
import maxGlasses from "../assets/images/maxence-glasses.png"
import maxence from "../assets/images/maxence.png"

function ClicablePicture () {
  const [isPressed, setIsPressed] = useState(false)

  const handlePress = () => {
    setIsPressed(!isPressed)
  }

  const imgStyle = {
    width: 100
  }
  return (
    <div>
    <img style={imgStyle} onClick={handlePress} src={isPressed ? maxence : maxGlasses}></img>
    </div>
  )
}

export default ClicablePicture