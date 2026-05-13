import { useState } from "react"
import profilePicture from "../assets/images/maxence.png"
import sunGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
  const [lightsOn, setlightsOn] = useState(false)

  return (
    <div className="container-image">
      <div>
        <img
          onClick={() => setlightsOn(prevSet => !prevSet)}
          src={lightsOn ? sunGlasses : profilePicture}
          alt="profile"
        />
      </div>
    </div>
  )
}

export default ClickablePicture
