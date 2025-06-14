import { useState } from "react"
import glasses from "../assets/images/maxence-glasses.png"
import noglasses from "../assets/images/maxence.png"

function ClickablePicture() {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <img
        src={toggle ? glasses : noglasses}
        alt="clickable picture"
        onClick={() => setToggle(!toggle)}
        style={{ width: "30vw" }}
      />
    </div>
  )
}

export default ClickablePicture