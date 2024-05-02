import { useState } from "react"
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'

export default function ClickablePicture() {
  const [showGlasses, setShowGlasses] = useState(false);

  const toggleMaxGlasses = () => {
    setShowGlasses(!showGlasses);
  }

  return (

    <img className="max-picture" onClick={toggleMaxGlasses} src={showGlasses ? maxenceGlasses : maxence}/>
  )
}