import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [glasses, setGlasses] = useState(false)
    const switchGlasess = () => setGlasses(!glasses)
  return (
    <div>
    {glasses ? (
        <img src={maxence} alt="" onClick={switchGlasess} width="150"/> )
        : (<img src={maxenceGlasses} alt="" onClick={switchGlasess} width="150p"/>
        )}
    </div>
  )
}

export default ClickablePicture