import { useState } from "react";
import picture2 from "../assets/images/maxence-glasses.png"
import picture1 from "../assets/images/maxence.png"

export default function ClickablePicture() {
  const [toggle, setToggle] = useState(true)

  let picture = toggle ? picture1 : picture2;

  const handleImage = () => {
    setToggle(!toggle)
  }
   
  return (
    <>
      <img src={picture} onClick={handleImage}/>
    </>
  )
}