import { useState } from "react"
import imgGlassesYes from "../assets/images/maxence-glasses.png"
import imgGlassesNo from "../assets/images/maxence.png"

function ClickablePicture() {

  const [ glasses , setGlasses ] = useState(false)
  
  return (
    <>
    {glasses ? (
      <img onClick={() => setGlasses(false)} src={imgGlassesYes} alt="glasses on" />
    ) : (
      <img onClick={() => setGlasses(true)} src={imgGlassesNo} alt="glasses off" />
    )}
    </>
  )
}

export default ClickablePicture