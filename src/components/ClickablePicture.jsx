import { useState } from "react"
import firstPic from "../assets/images/maxence.png"
import secondPic from "../assets/images/maxence-glasses.png"


function ClickablePicture() {

    const [showGlasses, setShowGlasses] = useState(false)

    return (
            <img src={showGlasses? secondPic: firstPic} onClick={() =>
                setShowGlasses(!showGlasses)
            } />
    )
}
export default ClickablePicture