import { useState } from "react"
import maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {

  const [ picture, setPicture ] = useState(maxence)

  const handleClick = () => {
    if (picture === maxence) {
      setPicture(maxenceGlasses)
    } else if (picture === maxenceGlasses) {
      setPicture(maxence)
    }
    
  }

  return (
    <div className="picture">
      <img onClick={handleClick} src={picture} alt="Maxence" />
    </div>
  )
}

export default ClickablePicture