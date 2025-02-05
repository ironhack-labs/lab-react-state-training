import { useState } from "react"
import  maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

export default function ClickablePicture() {

    const[showGlasses, setShowGlasses] = useState(false)
    const toggleShowGlasses = () => {
        setShowGlasses((prev) => !prev)
    }


    return (
        <>
        <img src={showGlasses ? maxenceGlasses : maxence} alt="maxence" onClick={toggleShowGlasses} />
        </>
    )
}