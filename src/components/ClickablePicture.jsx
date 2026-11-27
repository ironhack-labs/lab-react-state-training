import {useState} from "react"

import picture1 from "../assets/images/maxence.png"
import picture2 from "../assets/images/maxence-glasses.png"

function ClickablePicture() {

const [isClicked, setIsClicked] = useState(false)

function handleClick() {
    setIsClicked(!isClicked)

  }

  return (
    <img
       className="clickable-picture"
       src={isClicked ? picture2 : picture1}
       onClick={handleClick}
       alt="Clickable picture"
    />

  )

} 

export default ClickablePicture

